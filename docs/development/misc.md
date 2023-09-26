# Полезные советы

::: details Как поймать момент когда пользователь доскролил до определенного места?

Intersection Observer

:::

<!-- В тройке есть только один кейс протекания. -->
<!-- Когда классы корневого элемента компонента совпадают с классами родителя. -->

::: details i18n - интернационализация приложения

NPM библиотека для интернационализации и локализации i18n очень популярна, однако за последние годы она сильно располнела. В ней много возможностей для локализации дат, чисел, установки нужных склонений, поддержки RTL языков, загрузки локалей с сервера и кучи еще чего. На сайте i18next она называется уже даже "интернационализационным фреймворком".

В то же время часто для локализации сайта в большинстве случаев требуются очень простые вещи, занимающие всего пару процентов от всего функционала тяжеловеса i18n.

По сути обычно нужна реактивная функция, по ключу и текущей локали возвращающая строку.

Вариант реализации через композабл - в [этой статье](https://habr.com/ru/articles/736530/)

Ваш бандл "похудеет" на 50Кб.
:::

::: details Options API или Composition API?

Советуется Composition API (script setup) как более логичный и удобный, в котором программист контролирует поток выполнения программы средствами JavaScript, а не просто задает какие-то магические опции.

:::

::: details Ref или Reactive?

Отличие в плане использования - Reactive работает только с объектами и не отслеживает замену объекта. Ref работает со всем и отслеживает замену переменной:

```js
const a = Ref(1);
const b = Reactive({ x: 1 });

// is OK
a.value = 2;

// is NOT OK
b = { x: 2 };
```

Реализации реактивных переменных в Vue 2 и Vue 3 отличаются. Во Vue 2 была своя (фреймворка) реализация отслеживания изменений. Во Vue 3 для этого используется объект Proxy, введенный в ES6. Из-за поддержки данного функционала на уровне языка (JavaScript engine), соответствующий код фреймворка получается эффективней и проще.

Reactive непосредственно использует Proxy объект.

Ref на объекте использует напрямую Reactive для отслеживания изменения внутри объекта, и создает и хранит массив зависимостей переменной для примитивов и объектов в случае их замены.

Если хотите претенциозной эффективности - используйте на объектах Reactive, на примитивах - Ref. В ином случае можно все делать через Ref.

:::

::: details ShallowRef

Когда у вас массив с большим количеством элементов, но данные внутри элементов массива не меняются, а может меняться только сам массив (добавление элементов, удаление, замена массива) - используйте `ShallowRef`.

Он работает как `Ref`, но не отслеживает изменения внутри элементов массива, что дает значительное улучшение производительности.

:::

::: details Миксины

Нужно забыть о них как о страшном сне. Миксины как паттерн множественного наследования являются очень плохой архитектурной практикой и должны быть избегаемы. Во Vue 2 в самом фреймворке не было возможности сделать для компонент общей часть стейта и методов, поэтому использовались миксины. Во Vue 3 появилось Composition API и миксины стали не нужны.

:::