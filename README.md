# imooc-react-learning

## TodoList(without redux)

[TodoList-v1](https://github.com/lihs-learning/imooc-react-learning/tree/todo-list-v1)

## TodoList(with redux)

[TodoList-v2](https://github.com/lihs-learning/imooc-react-learning/tree/todo-list-v2)

目前有两个版本，区别如下：

(v2.1)[https://github.com/lihs-learning/imooc-react-learning/tree/list-v2.1] （默认版本） - 只使用了一次映射，将redux中的store和reduce映射到最外的Todo List中，Todo List内部在通过Props向子组件传递。据说一般项目中是这么用的。

(v2.0)[https://github.com/lihs-learning/imooc-react-learning/tree/list-v2.0] - 使用了多次映射，将redux中的store和reduce映射到Todo List的各个子组件中。与redux的官网的教程一致，估计这样设计的目的是为了让初学者能更好理解不同组件间的传递。
