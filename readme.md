线程

1. 浏览器有这么几大线程：UI渲染线程（用于页面的渲染），javascript引擎线程（用于处理js），GUI事件触发线程（用于交互）。

有时会开启的线程：http传输线程，定时触发线程（定时器）

它们之间的关系是什么呢？

（1）UI渲染线程 与 javascript引擎线程 互斥

由于javascript可以操纵页面的DOM，所以如果UI渲染线程与javascript引擎线程 不互斥的话，在UI渲染线程进行页面渲染的同时，javascript引擎线程进行DOM修改，最终会造成DOM状态不一致的现象。所以，当javascript引擎线程运行的时候，UI渲染线程处于冻结状态。

（2）javascript引擎线程 与 GUI事件触发线程（用于交互） 异步

浏览器开启事件触发线程，等待用户动作，事件触发线程解析为响应事件，转移到javascript引擎线程，排队等候，等待javascript引擎的处理。

（3）javascript引擎线程 与 http传输线程 异步

网页get，post等请求，xhr异步请求都通过http传输线程，传送到javascript引擎排队，等候处理。

（4）javascript引擎线程 与 定时触发线程（定时器） 异步

setTimeout(),setInterval()由单独的线程 定时触发线程 触发，传送到javascript引擎排队等候，等待处理。
2. 浏览器通过http线程收到xhr响应，但是转到javascript线程等待执行。javascript单线程，一次只能处理一个任务。第一个任务无限循环，后面的任务全部阻塞。

xhr异步编程实际上是一种障眼法。

3. 定时器时间不准：事件可能被它之前的事件阻塞，导致执行晚了几拍。

参考文章
http://blog.csdn.net/u014787301/article/details/51984998