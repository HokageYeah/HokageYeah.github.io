<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE en-export SYSTEM "http://xml.evernote.com/pub/evernote-export3.dtd">
<en-export export-date="20230202T062054Z" application="Evernote" version="Evernote Mac 9.5.20 (466686)">
<note><title>flutter学习笔记</title><content><![CDATA[<!DOCTYPE en-note SYSTEM 'http://xml.evernote.com/pub/enml2.dtd'><en-note><div style="font-size: 14px; margin: 0; padding: 0; width: 100%;"><h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">1、使用 abstract 修饰符来定义一个抽象类，该类不能被实例化。抽象类在定义接口（implements）的时候非常有用，实际上抽象中也包含一些实现</strong></h4>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">  abstract class Study {
     void study();
  }
</code></pre>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">继承抽象类 , 必须实现抽象类中的抽象方法</strong></li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">抽象类继承抽象类 , 不必实现抽象类中的抽象方法</strong></li>
</ul>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">abstract class Student4 extends AbstractPerson{

}

</code></pre>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">抽象类中既可以包含没有方法体的方法 , 又可以包含有方法体的方法 ;<br/>
抽象方法 : 没有方法体的方法称为抽象方法 , 没有关键字定义 ;<br/>
抽象类不一定有抽象方法 , 抽象类中可以定义抽象方法 , 也可以不定义 ;<br/>
如果类中有抽象方法 , 必须将该类标为抽象类 ;<br/>
抽象类可以没有抽象方法 , 有抽象方法的一定是抽象类 ;</p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">抽象类子类 : 抽象类的子类既可以是 抽象类 , 又可以是 普通类 ;<br/>
<strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">普通类</strong> : 如果普通的类继承抽象类 , 必须实现抽象类的抽象方法 ;<br/>
<strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">抽象类</strong> : 如果抽象类继承抽象类 , 则 不必实现父类抽象方法 ; ( 不强制实现 , 可以实现 )<br/>
extends抽象类 和implements的区别：<br/>
1、如果要服用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用extends继承抽象类。<br/>
2、如果只是把抽象类当作标准的话我们就用implements实现抽象类。</p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://blog.csdn.net/shulianghan/article/details/113886236" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">【Flutter】Dart 面向对象 ( 抽象类 | 抽象方法 )主要有一些官方文档资料</a></p>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">2、为类添加特征：mixins</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">mixins 是在多个类层次结构中重用代码的一种方式</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">要使用 mixins ，在 with 关键字后面跟一个或多个 mixin 的名字(用逗号分开)，并且with要用在extends关键字之后</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">mixins的特征：实现 mixin ，就创建一个继承 Object 类的子类(不能继承其他类)，不声明任何构造方法，不调用 super</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">猜猜上面的类中哪个是mixin？</li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">3、科普小知识：dynamic、var、Object三者的区别</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">dynamic：是所有Dart对象的基础类型， 在大多数情况下，通常不直接使用它，</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">通过它定义的变量会关闭类型检查，这意味着 dynamic x = 'hal';x.foo();</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">这段代码静态类型检查不会报错，但是运行时会crash，因为x并没有foo()方法，所以建议大家在编程时不要直接使用dynamic；</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">var：是一个关键字，意思是“我不关心这里的类型是什么。”，系统会自动推断类型runtimeType；</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">Object：是Dart对象的基类，当你定义：Object o=xxx；时这时候系统会认为o是个对象，你可以调用o的toString()和hashCode()方法</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">因为Object提供了这些方法，但是如果你尝试调用o.foo()时，静态类型检查会进行报错；<br/>
<strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">综上不难看出dynamic与Object的最大的区别是在静态类型检查上；</strong></li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">3、flutter方法构成</strong></h4>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">    class FunctionLearn {
      * 方法构成：
        返回值类型 + 方法名 + 参数
      其中：返回值类型可缺省，也可为void或具体的类型
     方法名：匿名方法不需要方法名，下文会提到
      参数：参数类型和参数名，参数类型可缺省（另外，参数又分可选参数和参数默认值，可参考面向对象一节中构造方法部分的讲解）
      int sum(int val1, int val2) {
        return val1 + val2;
      }

      * 私有方法：
        通过_开头命名的方法
        作用域是当前文件
      _learn() {
        print('FunctionLearn');
      }

      *  匿名方法：
         大部分方法都带有名字，例如 main() 或者 print();
         在Dart中你有可以创建没有名字的方法，称之为 匿名方法，有时候也被称为 lambda 或者 closure 闭包；
         你可以把匿名方法赋值给一个变量， 然后你可以使用这个方法，比如添加到集合或者从集合中删除；
         匿名方法和命名方法看起来类似— 在括号之间可以定义一些参数，参数使用逗号 分割，也可以是可选参数；
         后面大括号中的代码为函数体：
         ([[Type] param1[, …]]) {
            codeBlock;
         };
      anonymousFunction() {
        var list = ['私有方法', '匿名方法'];
        //下面的代码定义了一个参数为i （该参数没有指定类型）的匿名函数
        //list 中的每个元素都会调用这个函数来 打印出来，同时来计算了每个元素在 list 中的索引位置
        list.forEach((i) {
          print(list.indexOf(i).toString() + ': ' + i);
        });
      }
    }
</code></pre>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">4、泛型：</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">通俗理解：泛型主要是解决类、接口、方法的复用性、以及对不特定数据类型的支持</p>
</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">泛型类</p>
</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">泛型作用：提高代码服用度<br/>
class Cache&lt;T&gt; {<br/>
static final Map&lt;String, Object&gt; _cached = Map();</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">void setItem(String key, T value) {
  _cached[key] = value;
}

///泛型方法
T getItem(String key) {
  return _cached[key];
}
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">}</p>
</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">有时候你在实现类似通用接口的泛型中，期望的类型是某些特定类型时，这时可以使用类型约束<br/>
class Member&lt;T extends Person&gt; {<br/>
T _person;</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">///泛型作用：约束参数类型
Member(this._person);

String fixedName() {
  return 'fixed:${_person.name}';
}
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">}</p>
</li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">5、Dart编程小技巧1：安全的调用</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">对于不确定是否为空的对象可以通过?.的方式来方位它的属性和方法以防止空异常如：</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">  a?.foo()
  print(list?.length); //善用?.防止空异常
  ///Dart编程小技巧2：设置默认值
  print(list?.length ?? 0); //善用??设置默认值
</code></pre>
</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">flutter 两个点号 ..了吧，什么意思呢？直接看个小例子吧！</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">  复制代码
  void main() {
    List&lt;String&gt; list = getList()
      ..add("android")
      ..add("flutter")
      ..add("kotlin")
      ..removeAt(0);

    list.forEach((item) {
      print(item);
    });

    // ----------等同于

    print('---------------------------');

    List&lt;String&gt; list2 = getList();
    list2.add("android");
    list2.add("flutter");
    list2.add("kotlin");
    list2.removeAt(0);

    list2.forEach((item) {
      print(item);
    });
  }

  List&lt;String&gt; getList() {
    return new List();
  }
</code></pre>
</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">Dart中的对象操作符：<br/>
?     条件运算符<br/>
as    类型转换<br/>
is    类型判断<br/>
..     级联操作</p>
</li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">6、Image：</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">width、height：用于设置图片的宽、高，当不指定宽高时，图片会根据当前父容器的限制，尽可能的显示其原始大小，如果只设置width、height的其中一个，那么另一个属性默认会按比例缩放，但可以通过下面介绍的fit属性来指定适应规则。</li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">7、Future与FutureBuilder实用技巧：</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">Future的then的原型：</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">Future&lt;R&gt; then&lt;R&gt;(FutureOr&lt;R&gt; onValue(T value), {Function onError});
</code></pre>
</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">
<p style="line-height: 160%; box-sizing: content-box; color: #333; margin: 0;">第一个参数会成功的结果回调，第二个参数onError可选表示执行出现异常。<br/>
结合async await<br/>
Future是异步的，如果我们要将异步转同步，那么可以借助async await来完成。</p>
</li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">8、Flutter 中const 修饰符。</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">一个 Dart 类的对象是否能用 const 修饰，取决于类的构造方法上是否被 const 修饰；<br/>
使用 const 修饰的构造方法中（<strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">常量构造函数</strong>），所有成员必须被 final 修饰；final可以先声明后赋值。<br/>
<code style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; color: #c1788b; padding: 4px 4px 2px 0; letter-spacing: -.3px;">如：final int a; a= 1</code><br/>
构造 const 对象时，传参也必须是 const 的常量；<br/>
const 修饰的构造方法，不能有方法体；<br/>
对于 Flutter 来说，const 修饰的优化点：<br/>
利用常量池复用 Widget，在更新频繁的 Widget 场景中，有优化作用，避免了 Widget 的回收和重建；<br/>
const 对 GC 有一定的抑制左右，在会创建大量相同对象的场景下，创建的对象少了，自然 GC 也会变少；<br/>
<strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">identical： 用来检查两个引用是否指向同一个对象。</strong> <code style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; color: #c1788b; padding: 4px 4px 2px 0; letter-spacing: -.3px;">identical(a, b)</code></li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">9、Flutter - 监视页面的切换(RouteObserver &amp; RouteAware))。</strong></h4>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://blog.csdn.net/sinat_17775997/article/details/106417967" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">Flutter - 监视页面的切换</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://www.jianshu.com/p/75b62c3c996b" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">Flutter - 监视页面的切换</a></p>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;">routeObserver.subscribe(this, ModalRoute.of(context) as PageRoute);<br/>
假如有3个页面，分别是A、B、C，跳转逻辑由A-&gt;B-&gt;C，而RouteAware使用with混淆在B中。<br/>
didPopNext：在C页面关闭后，B页面调起该方法；<br/>
didPush: 当由A打开B页面时，B页面调起该方法；<br/>
didPop: 当B页面关闭时，B页面调起该方法；<br/>
didPushNext: 当从B页面打开C页面时，该方法被调起。</li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">10、Flutter - pubspec.yaml、pubspec.lock 配置文件详解</strong></h4>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">pubspec.yaml配置：</strong></li>
</ul>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://www.freesion.com/article/23331430061/" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">【FLUTTER 实战】PUBSPEC.YAML 配置文件详解</a><br/>
不指定或者 ANY：</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">path_provider:
path_provider: any
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">指定依赖的版本。<br/>
&lt;=X.Y.Z 或者&lt;X.Y.Z</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">path_provider: &lt;=1.6.22
path_provider: &lt;1.6.22
</code></pre>
<blockquote style="line-height: 160%; box-sizing: content-box; margin: 15px 0; border-left: 4px solid #ddd; padding: 0 15px; color: #777;">
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333; margin-top: 0; margin-bottom: 0;">=A.B.C &lt;X.Y.Z<br/>
指定版本的区间：</p>
</blockquote>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">path_provider: '&gt;=1.0.0 &lt;1.6.22'
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">^X.Y.Z<br/>
此方式为最常见的方式，也是推荐的方式。<br/>
此方式表示大版本不变，小版本使用最新的版本，例如^1.6.22 相当于'&gt;=1.6.22 &lt;2.0.0'`</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">path_provider: ^1.6.22
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">依赖本地库</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">dependencies:
  flutter_package:
    path: ../flutter_package
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">依赖 Github 上的一个插件<br/>
url：github 地址<br/>
ref：表示git引用，可以是 commit hash, tag 或者 branch<br/>
path：如果 git 仓库中有多个软件包，则可以使用此属性指定软件包</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">dependencies:
  bloc:
    git:
      url: https://github.com/felangel/bloc.git
      ref: bloc_fixes_issue_110
      path: packages/bloc
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">依赖我们自己的 PUB 仓库</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">dependencies:
  bloc: 
    hosted:
      name: bloc
      url: http://your-package-server.com
    version: ^6.0.0
</code></pre>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;">项目依赖一个库（比如 path_provider）的版本为 1.6.22，而另一个依赖库也依赖这个 path_provider， 但版本为 0.5.0，那么我最终到底依赖哪个版本，此时执行 flutter pub get 则会出现错误。<br/>
此时要解决这个冲突，可以添加 dependency_overrides：</p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">dependency_overrides:
  path_provider: ^1.6.22
</code></pre>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">pubspec.lock配置：</strong></li>
</ul>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://juejin.cn/post/7028959170011332621" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">Flutter 项目结构篇之- pubspec.lock</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://news.sangniao.com/p/3944738778" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">Flutter 项目中的pubspec.lock 文件是什么？</a></p>
<ul style="line-height: 160%; box-sizing: content-box; display: block; list-style-type: disc; padding-left: 30px; margin: 6px 0 10px; color: #333;">
<li style="line-height: 160%; box-sizing: content-box; position: relative;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">^version 表示/保证向后兼容指定版本的所有版本的范围。</strong></li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">如果我们不想升级所有的依赖库呢？如果我们只想的升级某一个依赖库呢？ 那我们使用flutter pub upgrade &lt;package_name&gt;.</li>
<li style="line-height: 160%; box-sizing: content-box; position: relative;">flutter pub outdated命令。如果我们希望pubspec.yaml直接更新我们的文件，可以用此命令查看我们所有的依赖库最新和兼容版本：</li>
</ul>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">11、Flutter组件化框架</strong></h4>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://zhuanlan.zhihu.com/p/342680835" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">Flutter组件化框架</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://flutter.cn/docs/development/add-to-app/multiple-flutters" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">多个 Flutter 页面或视图</a></p>
<pre style="line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; margin: 2px 0 8px; background-color: #f5f7f8;"><code style="display: block; overflow-x: auto; background: #1e1e1e; line-height: 160%; box-sizing: content-box; border: 0; border-radius: 0; letter-spacing: -.3px; padding: 18px; color: #f4f4f4; white-space: pre-wrap;">void main() {
  mainRealApp();
}

@pragma('vm:entry-point')
void rapidMain() =&gt; rapidRealApp ();

@pragma('vm:entry-point')
void learnMain() =&gt; learningRealApp();

@pragma('vm:entry-point')
void teachingMain() =&gt; ltRealAPP();
</code></pre>
<h4 style="line-height: 160%; box-sizing: content-box; font-size: 20px; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">12、Flutter软连接方式：实现本地flutter2.0、3.0的来回切换</strong></h4>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">3.0<br/>
ln -s ./flutter_3.0 ./flutter</strong></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><strong style="line-height: 160%; box-sizing: content-box; font-weight: 700;">2.10.5<br/>
ln -s ./flutter_2.10.5 ./flutter</strong></p>
<hr style="line-height: 160%; box-sizing: content-box; border-top: 1px solid #eee; margin: 16px 0;"/>
<hr style="line-height: 160%; box-sizing: content-box; border-top: 1px solid #eee; margin: 16px 0;"/>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://book.flutterchina.club/" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">flutter学习书籍</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://www.jianshu.com/p/abd937d0d9aa?utm_campaign=hugo" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">iOS原生与Flutter页面交互--从如何集成到相互跳转与传值(有demo)</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="http://www.devio.org/io/tools/json-to-dart/" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">Flutter模型转换工具</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="http://laomengit.com/element/ele_progress.html" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">老孟330个控件大全，flutter自带所有组件查阅资料、以及一些精彩的第三方使用插件</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://www.jianshu.com/p/a7ecd3b4e8b5" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">iOS现有工程集成Flutter</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://www.pc6.com/mac/111958.html" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">macOS Catalina (macOS 10.15) 已损坏无法打开解决办法</a></p>
<p style="line-height: 160%; box-sizing: content-box; margin: 10px 0; color: #333;"><a href="https://www.jianshu.com/p/9650780dcbf5" style="line-height: 160%; box-sizing: content-box; text-decoration: underline; color: #5286bc;">Flutter 生命周期和渲染原理（此文章写的比较好，能较好的告知flutter的生命周期以及用法）</a></p>
</div><center style='display:none !important;visibility:collapse !important;height:0 !important;white-space:nowrap;width:100%;overflow:hidden'>%23%23%23%23%20**1%E3%80%81%E4%BD%BF%E7%94%A8%20abstract%20%E4%BF%AE%E9%A5%B0%E7%AC%A6%E6%9D%A5%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AA%E6%8A%BD%E8%B1%A1%E7%B1%BB%EF%BC%8C%E8%AF%A5%E7%B1%BB%E4%B8%8D%E8%83%BD%E8%A2%AB%E5%AE%9E%E4%BE%8B%E5%8C%96%E3%80%82%E6%8A%BD%E8%B1%A1%E7%B1%BB%E5%9C%A8%E5%AE%9A%E4%B9%89%E6%8E%A5%E5%8F%A3%EF%BC%88implements%EF%BC%89%E7%9A%84%E6%97%B6%E5%80%99%E9%9D%9E%E5%B8%B8%E6%9C%89%E7%94%A8%EF%BC%8C%E5%AE%9E%E9%99%85%E4%B8%8A%E6%8A%BD%E8%B1%A1%E4%B8%AD%E4%B9%9F%E5%8C%85%E5%90%AB%E4%B8%80%E4%BA%9B%E5%AE%9E%E7%8E%B0**%0A%0A%20%20%20%20%20%20abstract%20class%20Study%20%7B%0A%20%20%20%20%20%20%20%20%20void%20study()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A*%20%20**%E7%BB%A7%E6%89%BF%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%2C%20%E5%BF%85%E9%A1%BB%E5%AE%9E%E7%8E%B0%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%AD%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95**%0A*%20**%E6%8A%BD%E8%B1%A1%E7%B1%BB%E7%BB%A7%E6%89%BF%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%2C%20%E4%B8%8D%E5%BF%85%E5%AE%9E%E7%8E%B0%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%AD%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95**%0A%60%60%60%0Aabstract%20class%20Student4%20extends%20AbstractPerson%7B%0A%0A%7D%0A%0A%60%60%60%0A%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%AD%E6%97%A2%E5%8F%AF%E4%BB%A5%E5%8C%85%E5%90%AB%E6%B2%A1%E6%9C%89%E6%96%B9%E6%B3%95%E4%BD%93%E7%9A%84%E6%96%B9%E6%B3%95%20%2C%20%E5%8F%88%E5%8F%AF%E4%BB%A5%E5%8C%85%E5%90%AB%E6%9C%89%E6%96%B9%E6%B3%95%E4%BD%93%E7%9A%84%E6%96%B9%E6%B3%95%20%3B%0A%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%3A%20%E6%B2%A1%E6%9C%89%E6%96%B9%E6%B3%95%E4%BD%93%E7%9A%84%E6%96%B9%E6%B3%95%E7%A7%B0%E4%B8%BA%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%2C%20%E6%B2%A1%E6%9C%89%E5%85%B3%E9%94%AE%E5%AD%97%E5%AE%9A%E4%B9%89%20%3B%0A%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%9C%89%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%2C%20%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%AD%E5%8F%AF%E4%BB%A5%E5%AE%9A%E4%B9%89%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%2C%20%E4%B9%9F%E5%8F%AF%E4%BB%A5%E4%B8%8D%E5%AE%9A%E4%B9%89%20%3B%0A%E5%A6%82%E6%9E%9C%E7%B1%BB%E4%B8%AD%E6%9C%89%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%2C%20%E5%BF%85%E9%A1%BB%E5%B0%86%E8%AF%A5%E7%B1%BB%E6%A0%87%E4%B8%BA%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%3B%0A%E6%8A%BD%E8%B1%A1%E7%B1%BB%E5%8F%AF%E4%BB%A5%E6%B2%A1%E6%9C%89%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%2C%20%E6%9C%89%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%E7%9A%84%E4%B8%80%E5%AE%9A%E6%98%AF%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%3B%0A%0A%E6%8A%BD%E8%B1%A1%E7%B1%BB%E5%AD%90%E7%B1%BB%20%3A%20%E6%8A%BD%E8%B1%A1%E7%B1%BB%E7%9A%84%E5%AD%90%E7%B1%BB%E6%97%A2%E5%8F%AF%E4%BB%A5%E6%98%AF%20%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%2C%20%E5%8F%88%E5%8F%AF%E4%BB%A5%E6%98%AF%20%E6%99%AE%E9%80%9A%E7%B1%BB%20%3B%0A**%E6%99%AE%E9%80%9A%E7%B1%BB**%20%3A%20%E5%A6%82%E6%9E%9C%E6%99%AE%E9%80%9A%E7%9A%84%E7%B1%BB%E7%BB%A7%E6%89%BF%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%2C%20%E5%BF%85%E9%A1%BB%E5%AE%9E%E7%8E%B0%E6%8A%BD%E8%B1%A1%E7%B1%BB%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%3B%0A**%E6%8A%BD%E8%B1%A1%E7%B1%BB**%20%3A%20%E5%A6%82%E6%9E%9C%E6%8A%BD%E8%B1%A1%E7%B1%BB%E7%BB%A7%E6%89%BF%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%2C%20%E5%88%99%20%E4%B8%8D%E5%BF%85%E5%AE%9E%E7%8E%B0%E7%88%B6%E7%B1%BB%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20%3B%20(%20%E4%B8%8D%E5%BC%BA%E5%88%B6%E5%AE%9E%E7%8E%B0%20%2C%20%E5%8F%AF%E4%BB%A5%E5%AE%9E%E7%8E%B0%20)%0Aextends%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%E5%92%8Cimplements%E7%9A%84%E5%8C%BA%E5%88%AB%EF%BC%9A%0A1%E3%80%81%E5%A6%82%E6%9E%9C%E8%A6%81%E6%9C%8D%E7%94%A8%E6%8A%BD%E8%B1%A1%E7%B1%BB%E9%87%8C%E9%9D%A2%E7%9A%84%E6%96%B9%E6%B3%95%EF%BC%8C%E5%B9%B6%E4%B8%94%E8%A6%81%E7%94%A8%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%E7%BA%A6%E6%9D%9F%E8%87%AA%E7%B1%BB%E7%9A%84%E8%AF%9D%E6%88%91%E4%BB%AC%E5%B0%B1%E7%94%A8extends%E7%BB%A7%E6%89%BF%E6%8A%BD%E8%B1%A1%E7%B1%BB%E3%80%82%0A2%E3%80%81%E5%A6%82%E6%9E%9C%E5%8F%AA%E6%98%AF%E6%8A%8A%E6%8A%BD%E8%B1%A1%E7%B1%BB%E5%BD%93%E4%BD%9C%E6%A0%87%E5%87%86%E7%9A%84%E8%AF%9D%E6%88%91%E4%BB%AC%E5%B0%B1%E7%94%A8implements%E5%AE%9E%E7%8E%B0%E6%8A%BD%E8%B1%A1%E7%B1%BB%E3%80%82%0A%5B%E3%80%90Flutter%E3%80%91Dart%20%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%20(%20%E6%8A%BD%E8%B1%A1%E7%B1%BB%20%7C%20%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%20)%E4%B8%BB%E8%A6%81%E6%9C%89%E4%B8%80%E4%BA%9B%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3%E8%B5%84%E6%96%99%5D(https%3A%2F%2Fblog.csdn.net%2Fshulianghan%2Farticle%2Fdetails%2F113886236)%0A%0A%23%23%23%23%20**2%E3%80%81%E4%B8%BA%E7%B1%BB%E6%B7%BB%E5%8A%A0%E7%89%B9%E5%BE%81%EF%BC%9Amixins**%0A*%20mixins%20%E6%98%AF%E5%9C%A8%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E4%B8%AD%E9%87%8D%E7%94%A8%E4%BB%A3%E7%A0%81%E7%9A%84%E4%B8%80%E7%A7%8D%E6%96%B9%E5%BC%8F%0A*%20%E8%A6%81%E4%BD%BF%E7%94%A8%20mixins%20%EF%BC%8C%E5%9C%A8%20with%20%E5%85%B3%E9%94%AE%E5%AD%97%E5%90%8E%E9%9D%A2%E8%B7%9F%E4%B8%80%E4%B8%AA%E6%88%96%E5%A4%9A%E4%B8%AA%20mixin%20%E7%9A%84%E5%90%8D%E5%AD%97(%E7%94%A8%E9%80%97%E5%8F%B7%E5%88%86%E5%BC%80)%EF%BC%8C%E5%B9%B6%E4%B8%94with%E8%A6%81%E7%94%A8%E5%9C%A8extends%E5%85%B3%E9%94%AE%E5%AD%97%E4%B9%8B%E5%90%8E%0A*%20mixins%E7%9A%84%E7%89%B9%E5%BE%81%EF%BC%9A%E5%AE%9E%E7%8E%B0%20mixin%20%EF%BC%8C%E5%B0%B1%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%BB%A7%E6%89%BF%20Object%20%E7%B1%BB%E7%9A%84%E5%AD%90%E7%B1%BB(%E4%B8%8D%E8%83%BD%E7%BB%A7%E6%89%BF%E5%85%B6%E4%BB%96%E7%B1%BB)%EF%BC%8C%E4%B8%8D%E5%A3%B0%E6%98%8E%E4%BB%BB%E4%BD%95%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%EF%BC%8C%E4%B8%8D%E8%B0%83%E7%94%A8%20super%0A*%20%E7%8C%9C%E7%8C%9C%E4%B8%8A%E9%9D%A2%E7%9A%84%E7%B1%BB%E4%B8%AD%E5%93%AA%E4%B8%AA%E6%98%AFmixin%EF%BC%9F%0A%0A%0A%0A%0A%0A%23%23%23%23%20**3%E3%80%81%E7%A7%91%E6%99%AE%E5%B0%8F%E7%9F%A5%E8%AF%86%EF%BC%9Adynamic%E3%80%81var%E3%80%81Object%E4%B8%89%E8%80%85%E7%9A%84%E5%8C%BA%E5%88%AB**%0A*%20dynamic%EF%BC%9A%E6%98%AF%E6%89%80%E6%9C%89Dart%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B%EF%BC%8C%20%E5%9C%A8%E5%A4%A7%E5%A4%9A%E6%95%B0%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E9%80%9A%E5%B8%B8%E4%B8%8D%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E5%AE%83%EF%BC%8C%0A*%20%E9%80%9A%E8%BF%87%E5%AE%83%E5%AE%9A%E4%B9%89%E7%9A%84%E5%8F%98%E9%87%8F%E4%BC%9A%E5%85%B3%E9%97%AD%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5%EF%BC%8C%E8%BF%99%E6%84%8F%E5%91%B3%E7%9D%80%20dynamic%20x%20%3D%20'hal'%3Bx.foo()%3B%0A*%20%E8%BF%99%E6%AE%B5%E4%BB%A3%E7%A0%81%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5%E4%B8%8D%E4%BC%9A%E6%8A%A5%E9%94%99%EF%BC%8C%E4%BD%86%E6%98%AF%E8%BF%90%E8%A1%8C%E6%97%B6%E4%BC%9Acrash%EF%BC%8C%E5%9B%A0%E4%B8%BAx%E5%B9%B6%E6%B2%A1%E6%9C%89foo()%E6%96%B9%E6%B3%95%EF%BC%8C%E6%89%80%E4%BB%A5%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%9C%A8%E7%BC%96%E7%A8%8B%E6%97%B6%E4%B8%8D%E8%A6%81%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8dynamic%EF%BC%9B%0A*%20var%EF%BC%9A%E6%98%AF%E4%B8%80%E4%B8%AA%E5%85%B3%E9%94%AE%E5%AD%97%EF%BC%8C%E6%84%8F%E6%80%9D%E6%98%AF%E2%80%9C%E6%88%91%E4%B8%8D%E5%85%B3%E5%BF%83%E8%BF%99%E9%87%8C%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%98%AF%E4%BB%80%E4%B9%88%E3%80%82%E2%80%9D%EF%BC%8C%E7%B3%BB%E7%BB%9F%E4%BC%9A%E8%87%AA%E5%8A%A8%E6%8E%A8%E6%96%AD%E7%B1%BB%E5%9E%8BruntimeType%EF%BC%9B%0A*%20Object%EF%BC%9A%E6%98%AFDart%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%9F%BA%E7%B1%BB%EF%BC%8C%E5%BD%93%E4%BD%A0%E5%AE%9A%E4%B9%89%EF%BC%9AObject%20o%3Dxxx%EF%BC%9B%E6%97%B6%E8%BF%99%E6%97%B6%E5%80%99%E7%B3%BB%E7%BB%9F%E4%BC%9A%E8%AE%A4%E4%B8%BAo%E6%98%AF%E4%B8%AA%E5%AF%B9%E8%B1%A1%EF%BC%8C%E4%BD%A0%E5%8F%AF%E4%BB%A5%E8%B0%83%E7%94%A8o%E7%9A%84toString()%E5%92%8ChashCode()%E6%96%B9%E6%B3%95%0A*%20%E5%9B%A0%E4%B8%BAObject%E6%8F%90%E4%BE%9B%E4%BA%86%E8%BF%99%E4%BA%9B%E6%96%B9%E6%B3%95%EF%BC%8C%E4%BD%86%E6%98%AF%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%B0%9D%E8%AF%95%E8%B0%83%E7%94%A8o.foo()%E6%97%B6%EF%BC%8C%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5%E4%BC%9A%E8%BF%9B%E8%A1%8C%E6%8A%A5%E9%94%99%EF%BC%9B%0A**%E7%BB%BC%E4%B8%8A%E4%B8%8D%E9%9A%BE%E7%9C%8B%E5%87%BAdynamic%E4%B8%8EObject%E7%9A%84%E6%9C%80%E5%A4%A7%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E5%9C%A8%E9%9D%99%E6%80%81%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5%E4%B8%8A%EF%BC%9B**%0A%0A%0A%0A%0A%0A%23%23%23%23%20**3%E3%80%81flutter%E6%96%B9%E6%B3%95%E6%9E%84%E6%88%90**%0A%0A%20%20%20%20%20%20%20%20class%20FunctionLearn%20%7B%0A%20%20%20%20%20%20%20%20%20%20*%20%E6%96%B9%E6%B3%95%E6%9E%84%E6%88%90%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%20%2B%20%E6%96%B9%E6%B3%95%E5%90%8D%20%2B%20%E5%8F%82%E6%95%B0%0A%20%20%20%20%20%20%20%20%20%20%E5%85%B6%E4%B8%AD%EF%BC%9A%E8%BF%94%E5%9B%9E%E5%80%BC%E7%B1%BB%E5%9E%8B%E5%8F%AF%E7%BC%BA%E7%9C%81%EF%BC%8C%E4%B9%9F%E5%8F%AF%E4%B8%BAvoid%E6%88%96%E5%85%B7%E4%BD%93%E7%9A%84%E7%B1%BB%E5%9E%8B%0A%20%20%20%20%20%20%20%20%20%E6%96%B9%E6%B3%95%E5%90%8D%EF%BC%9A%E5%8C%BF%E5%90%8D%E6%96%B9%E6%B3%95%E4%B8%8D%E9%9C%80%E8%A6%81%E6%96%B9%E6%B3%95%E5%90%8D%EF%BC%8C%E4%B8%8B%E6%96%87%E4%BC%9A%E6%8F%90%E5%88%B0%0A%20%20%20%20%20%20%20%20%20%20%E5%8F%82%E6%95%B0%EF%BC%9A%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%8F%82%E6%95%B0%E5%90%8D%EF%BC%8C%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B%E5%8F%AF%E7%BC%BA%E7%9C%81%EF%BC%88%E5%8F%A6%E5%A4%96%EF%BC%8C%E5%8F%82%E6%95%B0%E5%8F%88%E5%88%86%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0%E5%92%8C%E5%8F%82%E6%95%B0%E9%BB%98%E8%AE%A4%E5%80%BC%EF%BC%8C%E5%8F%AF%E5%8F%82%E8%80%83%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%80%E8%8A%82%E4%B8%AD%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E9%83%A8%E5%88%86%E7%9A%84%E8%AE%B2%E8%A7%A3%EF%BC%89%0A%20%20%20%20%20%20%20%20%20%20int%20sum(int%20val1%2C%20int%20val2)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20val1%20%2B%20val2%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20*%20%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%E9%80%9A%E8%BF%87_%E5%BC%80%E5%A4%B4%E5%91%BD%E5%90%8D%E7%9A%84%E6%96%B9%E6%B3%95%0A%20%20%20%20%20%20%20%20%20%20%20%20%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%98%AF%E5%BD%93%E5%89%8D%E6%96%87%E4%BB%B6%0A%20%20%20%20%20%20%20%20%20%20_learn()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20print('FunctionLearn')%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20*%20%20%E5%8C%BF%E5%90%8D%E6%96%B9%E6%B3%95%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%A4%A7%E9%83%A8%E5%88%86%E6%96%B9%E6%B3%95%E9%83%BD%E5%B8%A6%E6%9C%89%E5%90%8D%E5%AD%97%EF%BC%8C%E4%BE%8B%E5%A6%82%20main()%20%E6%88%96%E8%80%85%20print()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%9C%A8Dart%E4%B8%AD%E4%BD%A0%E6%9C%89%E5%8F%AF%E4%BB%A5%E5%88%9B%E5%BB%BA%E6%B2%A1%E6%9C%89%E5%90%8D%E5%AD%97%E7%9A%84%E6%96%B9%E6%B3%95%EF%BC%8C%E7%A7%B0%E4%B9%8B%E4%B8%BA%20%E5%8C%BF%E5%90%8D%E6%96%B9%E6%B3%95%EF%BC%8C%E6%9C%89%E6%97%B6%E5%80%99%E4%B9%9F%E8%A2%AB%E7%A7%B0%E4%B8%BA%20lambda%20%E6%88%96%E8%80%85%20closure%20%E9%97%AD%E5%8C%85%EF%BC%9B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%E4%BD%A0%E5%8F%AF%E4%BB%A5%E6%8A%8A%E5%8C%BF%E5%90%8D%E6%96%B9%E6%B3%95%E8%B5%8B%E5%80%BC%E7%BB%99%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%EF%BC%8C%20%E7%84%B6%E5%90%8E%E4%BD%A0%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%EF%BC%8C%E6%AF%94%E5%A6%82%E6%B7%BB%E5%8A%A0%E5%88%B0%E9%9B%86%E5%90%88%E6%88%96%E8%80%85%E4%BB%8E%E9%9B%86%E5%90%88%E4%B8%AD%E5%88%A0%E9%99%A4%EF%BC%9B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%8C%BF%E5%90%8D%E6%96%B9%E6%B3%95%E5%92%8C%E5%91%BD%E5%90%8D%E6%96%B9%E6%B3%95%E7%9C%8B%E8%B5%B7%E6%9D%A5%E7%B1%BB%E4%BC%BC%E2%80%94%20%E5%9C%A8%E6%8B%AC%E5%8F%B7%E4%B9%8B%E9%97%B4%E5%8F%AF%E4%BB%A5%E5%AE%9A%E4%B9%89%E4%B8%80%E4%BA%9B%E5%8F%82%E6%95%B0%EF%BC%8C%E5%8F%82%E6%95%B0%E4%BD%BF%E7%94%A8%E9%80%97%E5%8F%B7%20%E5%88%86%E5%89%B2%EF%BC%8C%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%98%AF%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0%EF%BC%9B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%E5%90%8E%E9%9D%A2%E5%A4%A7%E6%8B%AC%E5%8F%B7%E4%B8%AD%E7%9A%84%E4%BB%A3%E7%A0%81%E4%B8%BA%E5%87%BD%E6%95%B0%E4%BD%93%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20(%5B%5BType%5D%20param1%5B%2C%20%E2%80%A6%5D%5D)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20codeBlock%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20anonymousFunction()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20list%20%3D%20%5B'%E7%A7%81%E6%9C%89%E6%96%B9%E6%B3%95'%2C%20'%E5%8C%BF%E5%90%8D%E6%96%B9%E6%B3%95'%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%E4%B8%8B%E9%9D%A2%E7%9A%84%E4%BB%A3%E7%A0%81%E5%AE%9A%E4%B9%89%E4%BA%86%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E4%B8%BAi%20%EF%BC%88%E8%AF%A5%E5%8F%82%E6%95%B0%E6%B2%A1%E6%9C%89%E6%8C%87%E5%AE%9A%E7%B1%BB%E5%9E%8B%EF%BC%89%E7%9A%84%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2Flist%20%E4%B8%AD%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%85%83%E7%B4%A0%E9%83%BD%E4%BC%9A%E8%B0%83%E7%94%A8%E8%BF%99%E4%B8%AA%E5%87%BD%E6%95%B0%E6%9D%A5%20%E6%89%93%E5%8D%B0%E5%87%BA%E6%9D%A5%EF%BC%8C%E5%90%8C%E6%97%B6%E6%9D%A5%E8%AE%A1%E7%AE%97%E4%BA%86%E6%AF%8F%E4%B8%AA%E5%85%83%E7%B4%A0%E5%9C%A8%20list%20%E4%B8%AD%E7%9A%84%E7%B4%A2%E5%BC%95%E4%BD%8D%E7%BD%AE%0A%20%20%20%20%20%20%20%20%20%20%20%20list.forEach((i)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20print(list.indexOf(i).toString()%20%2B%20'%3A%20'%20%2B%20i)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%0A%0A%0A%0A%23%23%23%23%20**4%E3%80%81%E6%B3%9B%E5%9E%8B%EF%BC%9A**%0A*%20%E9%80%9A%E4%BF%97%E7%90%86%E8%A7%A3%EF%BC%9A%E6%B3%9B%E5%9E%8B%E4%B8%BB%E8%A6%81%E6%98%AF%E8%A7%A3%E5%86%B3%E7%B1%BB%E3%80%81%E6%8E%A5%E5%8F%A3%E3%80%81%E6%96%B9%E6%B3%95%E7%9A%84%E5%A4%8D%E7%94%A8%E6%80%A7%E3%80%81%E4%BB%A5%E5%8F%8A%E5%AF%B9%E4%B8%8D%E7%89%B9%E5%AE%9A%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%94%AF%E6%8C%81%0A*%20%E6%B3%9B%E5%9E%8B%E7%B1%BB%0A*%20%E6%B3%9B%E5%9E%8B%E4%BD%9C%E7%94%A8%EF%BC%9A%E6%8F%90%E9%AB%98%E4%BB%A3%E7%A0%81%E6%9C%8D%E7%94%A8%E5%BA%A6%0A%20%20%20%20class%20Cache%3CT%3E%20%7B%0A%20%20%20%20%20%20static%20final%20Map%3CString%2C%20Object%3E%20_cached%20%3D%20Map()%3B%0A%0A%20%20%20%20%20%20void%20setItem(String%20key%2C%20T%20value)%20%7B%0A%20%20%20%20%20%20%20%20_cached%5Bkey%5D%20%3D%20value%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%2F%E6%B3%9B%E5%9E%8B%E6%96%B9%E6%B3%95%0A%20%20%20%20%20%20T%20getItem(String%20key)%20%7B%0A%20%20%20%20%20%20%20%20return%20_cached%5Bkey%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A*%20%E6%9C%89%E6%97%B6%E5%80%99%E4%BD%A0%E5%9C%A8%E5%AE%9E%E7%8E%B0%E7%B1%BB%E4%BC%BC%E9%80%9A%E7%94%A8%E6%8E%A5%E5%8F%A3%E7%9A%84%E6%B3%9B%E5%9E%8B%E4%B8%AD%EF%BC%8C%E6%9C%9F%E6%9C%9B%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%98%AF%E6%9F%90%E4%BA%9B%E7%89%B9%E5%AE%9A%E7%B1%BB%E5%9E%8B%E6%97%B6%EF%BC%8C%E8%BF%99%E6%97%B6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E7%B1%BB%E5%9E%8B%E7%BA%A6%E6%9D%9F%0A%20%20%20%20class%20Member%3CT%20extends%20Person%3E%20%7B%0A%20%20%20%20%20%20T%20_person%3B%0A%0A%20%20%20%20%20%20%2F%2F%2F%E6%B3%9B%E5%9E%8B%E4%BD%9C%E7%94%A8%EF%BC%9A%E7%BA%A6%E6%9D%9F%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B%0A%20%20%20%20%20%20Member(this._person)%3B%0A%0A%20%20%20%20%20%20String%20fixedName()%20%7B%0A%20%20%20%20%20%20%20%20return%20'fixed%3A%24%7B_person.name%7D'%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%23%23%23%23%20**5%E3%80%81Dart%E7%BC%96%E7%A8%8B%E5%B0%8F%E6%8A%80%E5%B7%A71%EF%BC%9A%E5%AE%89%E5%85%A8%E7%9A%84%E8%B0%83%E7%94%A8**%0A%20%20*%20%E5%AF%B9%E4%BA%8E%E4%B8%8D%E7%A1%AE%E5%AE%9A%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%3F.%E7%9A%84%E6%96%B9%E5%BC%8F%E6%9D%A5%E6%96%B9%E4%BD%8D%E5%AE%83%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%E4%BB%A5%E9%98%B2%E6%AD%A2%E7%A9%BA%E5%BC%82%E5%B8%B8%E5%A6%82%EF%BC%9A%20%0A%20%20%0A%20%20%20%20%20%20%20%20%20%20a%3F.foo()%0A%20%20%20%20%20%20%20%20%20%20print(list%3F.length)%3B%20%2F%2F%E5%96%84%E7%94%A8%3F.%E9%98%B2%E6%AD%A2%E7%A9%BA%E5%BC%82%E5%B8%B8%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%2FDart%E7%BC%96%E7%A8%8B%E5%B0%8F%E6%8A%80%E5%B7%A72%EF%BC%9A%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC%0A%20%20%20%20%20%20%20%20%20%20print(list%3F.length%20%3F%3F%200)%3B%20%2F%2F%E5%96%84%E7%94%A8%3F%3F%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC%0A*%20flutter%20%E4%B8%A4%E4%B8%AA%E7%82%B9%E5%8F%B7%20..%E4%BA%86%E5%90%A7%EF%BC%8C%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%E5%91%A2%EF%BC%9F%E7%9B%B4%E6%8E%A5%E7%9C%8B%E4%B8%AA%E5%B0%8F%E4%BE%8B%E5%AD%90%E5%90%A7%EF%BC%81%0A%0A%20%20%20%20%20%20%20%20%E5%A4%8D%E5%88%B6%E4%BB%A3%E7%A0%81%0A%20%20%20%20%20%20%20%20void%20main()%20%7B%0A%20%20%20%20%20%20%20%20%20%20List%3CString%3E%20list%20%3D%20getList()%0A%20%20%20%20%20%20%20%20%20%20%20%20..add(%22android%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20..add(%22flutter%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20..add(%22kotlin%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20..removeAt(0)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20list.forEach((item)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20print(item)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20----------%E7%AD%89%E5%90%8C%E4%BA%8E%0A%0A%20%20%20%20%20%20%20%20%20%20print('---------------------------')%3B%0A%0A%20%20%20%20%20%20%20%20%20%20List%3CString%3E%20list2%20%3D%20getList()%3B%0A%20%20%20%20%20%20%20%20%20%20list2.add(%22android%22)%3B%0A%20%20%20%20%20%20%20%20%20%20list2.add(%22flutter%22)%3B%0A%20%20%20%20%20%20%20%20%20%20list2.add(%22kotlin%22)%3B%0A%20%20%20%20%20%20%20%20%20%20list2.removeAt(0)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20list2.forEach((item)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20print(item)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20List%3CString%3E%20getList()%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20new%20List()%3B%0A%20%20%20%20%20%20%20%20%7D%0A*%20Dart%E4%B8%AD%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9C%E7%AC%A6%EF%BC%9A%0A%20%20%20%20%3F%20%20%20%20%20%E6%9D%A1%E4%BB%B6%E8%BF%90%E7%AE%97%E7%AC%A6%0A%20%20%20%20as%20%20%20%20%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%0A%20%20%20%20is%20%20%20%20%E7%B1%BB%E5%9E%8B%E5%88%A4%E6%96%AD%0A%20%20%20%20..%20%20%20%20%20%E7%BA%A7%E8%81%94%E6%93%8D%E4%BD%9C%0A%0A%23%23%23%23%20**6%E3%80%81Image%EF%BC%9A**%0A*%20width%E3%80%81height%EF%BC%9A%E7%94%A8%E4%BA%8E%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87%E7%9A%84%E5%AE%BD%E3%80%81%E9%AB%98%EF%BC%8C%E5%BD%93%E4%B8%8D%E6%8C%87%E5%AE%9A%E5%AE%BD%E9%AB%98%E6%97%B6%EF%BC%8C%E5%9B%BE%E7%89%87%E4%BC%9A%E6%A0%B9%E6%8D%AE%E5%BD%93%E5%89%8D%E7%88%B6%E5%AE%B9%E5%99%A8%E7%9A%84%E9%99%90%E5%88%B6%EF%BC%8C%E5%B0%BD%E5%8F%AF%E8%83%BD%E7%9A%84%E6%98%BE%E7%A4%BA%E5%85%B6%E5%8E%9F%E5%A7%8B%E5%A4%A7%E5%B0%8F%EF%BC%8C%E5%A6%82%E6%9E%9C%E5%8F%AA%E8%AE%BE%E7%BD%AEwidth%E3%80%81height%E7%9A%84%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%EF%BC%8C%E9%82%A3%E4%B9%88%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%B1%9E%E6%80%A7%E9%BB%98%E8%AE%A4%E4%BC%9A%E6%8C%89%E6%AF%94%E4%BE%8B%E7%BC%A9%E6%94%BE%EF%BC%8C%E4%BD%86%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E4%B8%8B%E9%9D%A2%E4%BB%8B%E7%BB%8D%E7%9A%84fit%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%8C%87%E5%AE%9A%E9%80%82%E5%BA%94%E8%A7%84%E5%88%99%E3%80%82%0A%0A%23%23%23%23%20**7%E3%80%81Future%E4%B8%8EFutureBuilder%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7%EF%BC%9A**%0A*%20Future%E7%9A%84then%E7%9A%84%E5%8E%9F%E5%9E%8B%EF%BC%9A%0A%0A%20%20%20%20%20%20Future%3CR%3E%20then%3CR%3E(FutureOr%3CR%3E%20onValue(T%20value)%2C%20%7BFunction%20onError%7D)%3B%0A*%20%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E4%BC%9A%E6%88%90%E5%8A%9F%E7%9A%84%E7%BB%93%E6%9E%9C%E5%9B%9E%E8%B0%83%EF%BC%8C%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0onError%E5%8F%AF%E9%80%89%E8%A1%A8%E7%A4%BA%E6%89%A7%E8%A1%8C%E5%87%BA%E7%8E%B0%E5%BC%82%E5%B8%B8%E3%80%82%0A%E7%BB%93%E5%90%88async%20await%0AFuture%E6%98%AF%E5%BC%82%E6%AD%A5%E7%9A%84%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%88%91%E4%BB%AC%E8%A6%81%E5%B0%86%E5%BC%82%E6%AD%A5%E8%BD%AC%E5%90%8C%E6%AD%A5%EF%BC%8C%E9%82%A3%E4%B9%88%E5%8F%AF%E4%BB%A5%E5%80%9F%E5%8A%A9async%20await%E6%9D%A5%E5%AE%8C%E6%88%90%E3%80%82%0A%0A%23%23%23%23%20**8%E3%80%81Flutter%20%E4%B8%ADconst%20%E4%BF%AE%E9%A5%B0%E7%AC%A6%E3%80%82**%0A*%20%E4%B8%80%E4%B8%AA%20Dart%20%E7%B1%BB%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E8%83%BD%E7%94%A8%20const%20%E4%BF%AE%E9%A5%B0%EF%BC%8C%E5%8F%96%E5%86%B3%E4%BA%8E%E7%B1%BB%E7%9A%84%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E4%B8%8A%E6%98%AF%E5%90%A6%E8%A2%AB%20const%20%E4%BF%AE%E9%A5%B0%EF%BC%9B%0A%E4%BD%BF%E7%94%A8%20const%20%E4%BF%AE%E9%A5%B0%E7%9A%84%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E4%B8%AD%EF%BC%88**%E5%B8%B8%E9%87%8F%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0**%EF%BC%89%EF%BC%8C%E6%89%80%E6%9C%89%E6%88%90%E5%91%98%E5%BF%85%E9%A1%BB%E8%A2%AB%20final%20%E4%BF%AE%E9%A5%B0%EF%BC%9Bfinal%E5%8F%AF%E4%BB%A5%E5%85%88%E5%A3%B0%E6%98%8E%E5%90%8E%E8%B5%8B%E5%80%BC%E3%80%82%0A%60%E5%A6%82%EF%BC%9Afinal%20int%20a%3B%20a%3D%201%60%0A%E6%9E%84%E9%80%A0%20const%20%E5%AF%B9%E8%B1%A1%E6%97%B6%EF%BC%8C%E4%BC%A0%E5%8F%82%E4%B9%9F%E5%BF%85%E9%A1%BB%E6%98%AF%20const%20%E7%9A%84%E5%B8%B8%E9%87%8F%EF%BC%9B%0Aconst%20%E4%BF%AE%E9%A5%B0%E7%9A%84%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%EF%BC%8C%E4%B8%8D%E8%83%BD%E6%9C%89%E6%96%B9%E6%B3%95%E4%BD%93%EF%BC%9B%0A%E5%AF%B9%E4%BA%8E%20Flutter%20%E6%9D%A5%E8%AF%B4%EF%BC%8Cconst%20%E4%BF%AE%E9%A5%B0%E7%9A%84%E4%BC%98%E5%8C%96%E7%82%B9%EF%BC%9A%0A%E5%88%A9%E7%94%A8%E5%B8%B8%E9%87%8F%E6%B1%A0%E5%A4%8D%E7%94%A8%20Widget%EF%BC%8C%E5%9C%A8%E6%9B%B4%E6%96%B0%E9%A2%91%E7%B9%81%E7%9A%84%20Widget%20%E5%9C%BA%E6%99%AF%E4%B8%AD%EF%BC%8C%E6%9C%89%E4%BC%98%E5%8C%96%E4%BD%9C%E7%94%A8%EF%BC%8C%E9%81%BF%E5%85%8D%E4%BA%86%20Widget%20%E7%9A%84%E5%9B%9E%E6%94%B6%E5%92%8C%E9%87%8D%E5%BB%BA%EF%BC%9B%0Aconst%20%E5%AF%B9%20GC%20%E6%9C%89%E4%B8%80%E5%AE%9A%E7%9A%84%E6%8A%91%E5%88%B6%E5%B7%A6%E5%8F%B3%EF%BC%8C%E5%9C%A8%E4%BC%9A%E5%88%9B%E5%BB%BA%E5%A4%A7%E9%87%8F%E7%9B%B8%E5%90%8C%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%9C%BA%E6%99%AF%E4%B8%8B%EF%BC%8C%E5%88%9B%E5%BB%BA%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%B0%91%E4%BA%86%EF%BC%8C%E8%87%AA%E7%84%B6%20GC%20%E4%B9%9F%E4%BC%9A%E5%8F%98%E5%B0%91%EF%BC%9B%0A**identical%EF%BC%9A%20%E7%94%A8%E6%9D%A5%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%BC%95%E7%94%A8%E6%98%AF%E5%90%A6%E6%8C%87%E5%90%91%E5%90%8C%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E3%80%82**%20%60identical(a%2C%20b)%60%20%0A%0A%23%23%23%23%20%20**9%E3%80%81Flutter%20-%20%E7%9B%91%E8%A7%86%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%88%87%E6%8D%A2(RouteObserver%20%26%20RouteAware))%E3%80%82**%0A%20%5BFlutter%20-%20%E7%9B%91%E8%A7%86%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%88%87%E6%8D%A2%5D(https%3A%2F%2Fblog.csdn.net%2Fsinat_17775997%2Farticle%2Fdetails%2F106417967)%20%0A%20%5BFlutter%20-%20%E7%9B%91%E8%A7%86%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%88%87%E6%8D%A2%5D(https%3A%2F%2Fwww.jianshu.com%2Fp%2F75b62c3c996b)%0A*%20routeObserver.subscribe(this%2C%20ModalRoute.of(context)%20as%20PageRoute)%3B%0A%E5%81%87%E5%A6%82%E6%9C%893%E4%B8%AA%E9%A1%B5%E9%9D%A2%EF%BC%8C%E5%88%86%E5%88%AB%E6%98%AFA%E3%80%81B%E3%80%81C%EF%BC%8C%E8%B7%B3%E8%BD%AC%E9%80%BB%E8%BE%91%E7%94%B1A-%3EB-%3EC%EF%BC%8C%E8%80%8CRouteAware%E4%BD%BF%E7%94%A8with%E6%B7%B7%E6%B7%86%E5%9C%A8B%E4%B8%AD%E3%80%82%0AdidPopNext%EF%BC%9A%E5%9C%A8C%E9%A1%B5%E9%9D%A2%E5%85%B3%E9%97%AD%E5%90%8E%EF%BC%8CB%E9%A1%B5%E9%9D%A2%E8%B0%83%E8%B5%B7%E8%AF%A5%E6%96%B9%E6%B3%95%EF%BC%9B%0AdidPush%3A%20%E5%BD%93%E7%94%B1A%E6%89%93%E5%BC%80B%E9%A1%B5%E9%9D%A2%E6%97%B6%EF%BC%8CB%E9%A1%B5%E9%9D%A2%E8%B0%83%E8%B5%B7%E8%AF%A5%E6%96%B9%E6%B3%95%EF%BC%9B%0AdidPop%3A%20%E5%BD%93B%E9%A1%B5%E9%9D%A2%E5%85%B3%E9%97%AD%E6%97%B6%EF%BC%8CB%E9%A1%B5%E9%9D%A2%E8%B0%83%E8%B5%B7%E8%AF%A5%E6%96%B9%E6%B3%95%EF%BC%9B%0AdidPushNext%3A%20%E5%BD%93%E4%BB%8EB%E9%A1%B5%E9%9D%A2%E6%89%93%E5%BC%80C%E9%A1%B5%E9%9D%A2%E6%97%B6%EF%BC%8C%E8%AF%A5%E6%96%B9%E6%B3%95%E8%A2%AB%E8%B0%83%E8%B5%B7%E3%80%82%0A%0A%23%23%23%23%20%20**10%E3%80%81Flutter%20-%20pubspec.yaml%E3%80%81pubspec.lock%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%A6%E8%A7%A3**%0A*%20**pubspec.yaml%E9%85%8D%E7%BD%AE%EF%BC%9A**%0A%5B%E3%80%90FLUTTER%20%E5%AE%9E%E6%88%98%E3%80%91PUBSPEC.YAML%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%A6%E8%A7%A3%5D(https%3A%2F%2Fwww.freesion.com%2Farticle%2F23331430061%2F)%0A%E4%B8%8D%E6%8C%87%E5%AE%9A%E6%88%96%E8%80%85%20ANY%EF%BC%9A%0A%60%60%60%0Apath_provider%3A%0Apath_provider%3A%20any%0A%60%60%60%0A%E6%8C%87%E5%AE%9A%E4%BE%9D%E8%B5%96%E7%9A%84%E7%89%88%E6%9C%AC%E3%80%82%0A%3C%3DX.Y.Z%20%E6%88%96%E8%80%85%3CX.Y.Z%0A%60%60%60%0Apath_provider%3A%20%3C%3D1.6.22%0Apath_provider%3A%20%3C1.6.22%0A%60%60%60%0A%3E%3DA.B.C%20%3CX.Y.Z%0A%E6%8C%87%E5%AE%9A%E7%89%88%E6%9C%AC%E7%9A%84%E5%8C%BA%E9%97%B4%EF%BC%9A%0A%60%60%60%0Apath_provider%3A%20'%3E%3D1.0.0%20%3C1.6.22'%0A%60%60%60%0A%5EX.Y.Z%0A%E6%AD%A4%E6%96%B9%E5%BC%8F%E4%B8%BA%E6%9C%80%E5%B8%B8%E8%A7%81%E7%9A%84%E6%96%B9%E5%BC%8F%EF%BC%8C%E4%B9%9F%E6%98%AF%E6%8E%A8%E8%8D%90%E7%9A%84%E6%96%B9%E5%BC%8F%E3%80%82%0A%E6%AD%A4%E6%96%B9%E5%BC%8F%E8%A1%A8%E7%A4%BA%E5%A4%A7%E7%89%88%E6%9C%AC%E4%B8%8D%E5%8F%98%EF%BC%8C%E5%B0%8F%E7%89%88%E6%9C%AC%E4%BD%BF%E7%94%A8%E6%9C%80%E6%96%B0%E7%9A%84%E7%89%88%E6%9C%AC%EF%BC%8C%E4%BE%8B%E5%A6%82%5E1.6.22%20%E7%9B%B8%E5%BD%93%E4%BA%8E'%3E%3D1.6.22%20%3C2.0.0'%60%0A%60%60%60%0Apath_provider%3A%20%5E1.6.22%0A%60%60%60%0A%E4%BE%9D%E8%B5%96%E6%9C%AC%E5%9C%B0%E5%BA%93%0A%60%60%60%0Adependencies%3A%0A%20%20flutter_package%3A%0A%20%20%20%20path%3A%20..%2Fflutter_package%0A%60%60%60%0A%E4%BE%9D%E8%B5%96%20Github%20%E4%B8%8A%E7%9A%84%E4%B8%80%E4%B8%AA%E6%8F%92%E4%BB%B6%0Aurl%EF%BC%9Agithub%20%E5%9C%B0%E5%9D%80%0Aref%EF%BC%9A%E8%A1%A8%E7%A4%BAgit%E5%BC%95%E7%94%A8%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%98%AF%20commit%20hash%2C%20tag%20%E6%88%96%E8%80%85%20branch%0Apath%EF%BC%9A%E5%A6%82%E6%9E%9C%20git%20%E4%BB%93%E5%BA%93%E4%B8%AD%E6%9C%89%E5%A4%9A%E4%B8%AA%E8%BD%AF%E4%BB%B6%E5%8C%85%EF%BC%8C%E5%88%99%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E6%AD%A4%E5%B1%9E%E6%80%A7%E6%8C%87%E5%AE%9A%E8%BD%AF%E4%BB%B6%E5%8C%85%0A%60%60%60%0Adependencies%3A%0A%20%20bloc%3A%0A%20%20%20%20git%3A%0A%20%20%20%20%20%20url%3A%20https%3A%2F%2Fgithub.com%2Ffelangel%2Fbloc.git%0A%20%20%20%20%20%20ref%3A%20bloc_fixes_issue_110%0A%20%20%20%20%20%20path%3A%20packages%2Fbloc%0A%60%60%60%0A%E4%BE%9D%E8%B5%96%E6%88%91%E4%BB%AC%E8%87%AA%E5%B7%B1%E7%9A%84%20PUB%20%E4%BB%93%E5%BA%93%0A%60%60%60%0Adependencies%3A%0A%20%20bloc%3A%20%0A%20%20%20%20hosted%3A%0A%20%20%20%20%20%20name%3A%20bloc%0A%20%20%20%20%20%20url%3A%20http%3A%2F%2Fyour-package-server.com%0A%20%20%20%20version%3A%20%5E6.0.0%0A%60%60%60%0A%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E4%B8%80%E4%B8%AA%E5%BA%93%EF%BC%88%E6%AF%94%E5%A6%82%20path_provider%EF%BC%89%E7%9A%84%E7%89%88%E6%9C%AC%E4%B8%BA%201.6.22%EF%BC%8C%E8%80%8C%E5%8F%A6%E4%B8%80%E4%B8%AA%E4%BE%9D%E8%B5%96%E5%BA%93%E4%B9%9F%E4%BE%9D%E8%B5%96%E8%BF%99%E4%B8%AA%20path_provider%EF%BC%8C%20%E4%BD%86%E7%89%88%E6%9C%AC%E4%B8%BA%200.5.0%EF%BC%8C%E9%82%A3%E4%B9%88%E6%88%91%E6%9C%80%E7%BB%88%E5%88%B0%E5%BA%95%E4%BE%9D%E8%B5%96%E5%93%AA%E4%B8%AA%E7%89%88%E6%9C%AC%EF%BC%8C%E6%AD%A4%E6%97%B6%E6%89%A7%E8%A1%8C%20flutter%20pub%20get%20%E5%88%99%E4%BC%9A%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF%E3%80%82%0A%E6%AD%A4%E6%97%B6%E8%A6%81%E8%A7%A3%E5%86%B3%E8%BF%99%E4%B8%AA%E5%86%B2%E7%AA%81%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%B7%BB%E5%8A%A0%20dependency_overrides%EF%BC%9A%0A%60%60%60%0Adependency_overrides%3A%0A%20%20path_provider%3A%20%5E1.6.22%0A%60%60%60%0A%0A*%20**pubspec.lock%E9%85%8D%E7%BD%AE%EF%BC%9A**%0A%5BFlutter%20%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E7%AF%87%E4%B9%8B-%20pubspec.lock%5D(https%3A%2F%2Fjuejin.cn%2Fpost%2F7028959170011332621)%0A%5BFlutter%20%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84pubspec.lock%20%E6%96%87%E4%BB%B6%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%5D(https%3A%2F%2Fnews.sangniao.com%2Fp%2F3944738778)%0A*%20**%5Eversion%20%E8%A1%A8%E7%A4%BA%2F%E4%BF%9D%E8%AF%81%E5%90%91%E5%90%8E%E5%85%BC%E5%AE%B9%E6%8C%87%E5%AE%9A%E7%89%88%E6%9C%AC%E7%9A%84%E6%89%80%E6%9C%89%E7%89%88%E6%9C%AC%E7%9A%84%E8%8C%83%E5%9B%B4%E3%80%82**%0A*%20%E5%A6%82%E6%9E%9C%E6%88%91%E4%BB%AC%E4%B8%8D%E6%83%B3%E5%8D%87%E7%BA%A7%E6%89%80%E6%9C%89%E7%9A%84%E4%BE%9D%E8%B5%96%E5%BA%93%E5%91%A2%EF%BC%9F%E5%A6%82%E6%9E%9C%E6%88%91%E4%BB%AC%E5%8F%AA%E6%83%B3%E7%9A%84%E5%8D%87%E7%BA%A7%E6%9F%90%E4%B8%80%E4%B8%AA%E4%BE%9D%E8%B5%96%E5%BA%93%E5%91%A2%EF%BC%9F%20%E9%82%A3%E6%88%91%E4%BB%AC%E4%BD%BF%E7%94%A8flutter%20pub%20upgrade%20%3Cpackage_name%3E.%0A*%20flutter%20pub%20outdated%E5%91%BD%E4%BB%A4%E3%80%82%E5%A6%82%E6%9E%9C%E6%88%91%E4%BB%AC%E5%B8%8C%E6%9C%9Bpubspec.yaml%E7%9B%B4%E6%8E%A5%E6%9B%B4%E6%96%B0%E6%88%91%E4%BB%AC%E7%9A%84%E6%96%87%E4%BB%B6%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%94%A8%E6%AD%A4%E5%91%BD%E4%BB%A4%E6%9F%A5%E7%9C%8B%E6%88%91%E4%BB%AC%E6%89%80%E6%9C%89%E7%9A%84%E4%BE%9D%E8%B5%96%E5%BA%93%E6%9C%80%E6%96%B0%E5%92%8C%E5%85%BC%E5%AE%B9%E7%89%88%E6%9C%AC%EF%BC%9A%0A%0A%23%23%23%23%20%20**11%E3%80%81Flutter%E7%BB%84%E4%BB%B6%E5%8C%96%E6%A1%86%E6%9E%B6**%0A%5BFlutter%E7%BB%84%E4%BB%B6%E5%8C%96%E6%A1%86%E6%9E%B6%5D(https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F342680835)%0A%5B%E5%A4%9A%E4%B8%AA%20Flutter%20%E9%A1%B5%E9%9D%A2%E6%88%96%E8%A7%86%E5%9B%BE%5D(https%3A%2F%2Fflutter.cn%2Fdocs%2Fdevelopment%2Fadd-to-app%2Fmultiple-flutters)%0A%60%60%60%0Avoid%20main()%20%7B%0A%20%20mainRealApp()%3B%0A%7D%0A%0A%40pragma('vm%3Aentry-point')%0Avoid%20rapidMain()%20%3D%3E%20rapidRealApp%20()%3B%0A%0A%40pragma('vm%3Aentry-point')%0Avoid%20learnMain()%20%3D%3E%20learningRealApp()%3B%0A%0A%40pragma('vm%3Aentry-point')%0Avoid%20teachingMain()%20%3D%3E%20ltRealAPP()%3B%0A%60%60%60%0A%0A%23%23%23%23%20%20**12%E3%80%81Flutter%E8%BD%AF%E8%BF%9E%E6%8E%A5%E6%96%B9%E5%BC%8F%EF%BC%9A%E5%AE%9E%E7%8E%B0%E6%9C%AC%E5%9C%B0flutter2.0%E3%80%813.0%E7%9A%84%E6%9D%A5%E5%9B%9E%E5%88%87%E6%8D%A2**%0A**3.0%0Aln%20-s%20.%2Fflutter_3.0%20.%2Fflutter**%0A%0A**2.10.5%0Aln%20-s%20.%2Fflutter_2.10.5%20.%2Fflutter**%0A%0A%0A*%20*%20*%0A*%20*%20*%0A%5Bflutter%E5%AD%A6%E4%B9%A0%E4%B9%A6%E7%B1%8D%5D(https%3A%2F%2Fbook.flutterchina.club%2F)%0A%5BiOS%E5%8E%9F%E7%94%9F%E4%B8%8EFlutter%E9%A1%B5%E9%9D%A2%E4%BA%A4%E4%BA%92--%E4%BB%8E%E5%A6%82%E4%BD%95%E9%9B%86%E6%88%90%E5%88%B0%E7%9B%B8%E4%BA%92%E8%B7%B3%E8%BD%AC%E4%B8%8E%E4%BC%A0%E5%80%BC(%E6%9C%89demo)%5D(https%3A%2F%2Fwww.jianshu.com%2Fp%2Fabd937d0d9aa%3Futm_campaign%3Dhugo)%0A%5BFlutter%E6%A8%A1%E5%9E%8B%E8%BD%AC%E6%8D%A2%E5%B7%A5%E5%85%B7%5D(http%3A%2F%2Fwww.devio.org%2Fio%2Ftools%2Fjson-to-dart%2F)%0A%5B%E8%80%81%E5%AD%9F330%E4%B8%AA%E6%8E%A7%E4%BB%B6%E5%A4%A7%E5%85%A8%EF%BC%8Cflutter%E8%87%AA%E5%B8%A6%E6%89%80%E6%9C%89%E7%BB%84%E4%BB%B6%E6%9F%A5%E9%98%85%E8%B5%84%E6%96%99%E3%80%81%E4%BB%A5%E5%8F%8A%E4%B8%80%E4%BA%9B%E7%B2%BE%E5%BD%A9%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6%5D(http%3A%2F%2Flaomengit.com%2Felement%2Fele_progress.html)%0A%5BiOS%E7%8E%B0%E6%9C%89%E5%B7%A5%E7%A8%8B%E9%9B%86%E6%88%90Flutter%5D(https%3A%2F%2Fwww.jianshu.com%2Fp%2Fa7ecd3b4e8b5)%0A%5BmacOS%20Catalina%20(macOS%2010.15)%20%E5%B7%B2%E6%8D%9F%E5%9D%8F%E6%97%A0%E6%B3%95%E6%89%93%E5%BC%80%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95%5D(https%3A%2F%2Fwww.pc6.com%2Fmac%2F111958.html)%0A%5BFlutter%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8C%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86%EF%BC%88%E6%AD%A4%E6%96%87%E7%AB%A0%E5%86%99%E7%9A%84%E6%AF%94%E8%BE%83%E5%A5%BD%EF%BC%8C%E8%83%BD%E8%BE%83%E5%A5%BD%E7%9A%84%E5%91%8A%E7%9F%A5flutter%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BB%A5%E5%8F%8A%E7%94%A8%E6%B3%95%EF%BC%89%5D(https%3A%2F%2Fwww.jianshu.com%2Fp%2F9650780dcbf5)%0A%0A</center></en-note>]]></content><created>20220414T085803Z</created><updated>20230202T061907Z</updated><note-attributes><latitude>34.77212524414063</latitude><longitude>113.7667480825747</longitude><altitude>140.0013427734375</altitude><author>m15836058793@163.com</author><source>desktop.mac</source><reminder-order>0</reminder-order><content-class>yinxiang.markdown</content-class></note-attributes></note>
</en-export>
