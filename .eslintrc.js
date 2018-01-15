module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jasmine":true
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType":"module",
        "ecmaFeatures": {
            "classes": true, // 允许使用class
            "defaultParams": true, // 允许使用函数参数的默认值
            "blockBindings": true, // 块级作用域，允许使用let const
            "modules": true, // 允许使用模块，模块内默认严格模式
            "experimentalObjectRestSpread":true // 允许使用...
        }
    },
    "globals": {
        "window": false,
        "module": true,
        "require":true,
        "define":true,
        "__dirname":true,
        "process":true
    },
    "plugins":[
        "vue",
        "jasmine"
    ],
    "rules": {
        "indent": [//缩进
            "error",
            4,
            {
                "SwitchCase":1
            }
        ],
        "linebreak-style": [//换行符风格
            "error",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"//字符串使用双引号
        ],
        "semi": [
            "error",
            "always"//必须使用;结尾
        ],
        "arrow-body-style": 0,// 要求箭头函数体使用大括号
        "arrow-parens": 0,// 要求箭头函数的参数使用圆括号
        "eqeqeq":"error",//不能使用==
        "curly":"warn",//使用if else while时要加{}
        "camelcase":"error",//必须使用驼峰命名法
        "no-use-before-define":[//在定义变量之前不能使用
            "error",
            {
                "functions": false,
                "classes": true
            }
        ],
        "no-mixed-spaces-and-tabs":"error",//禁止混合使用tab和空格
        "no-new-object":"error",//不能使用new新建对象
        "no-undef":"error",//不能在未定义前使用变量
        "no-unused-vars":"error",//变量定义但未使用
        "no-delete-var":"error",//不允许delete变量
        "no-debugger": 2,// 禁用 debugger
        "no-dupe-args": 2,// 禁止 function 定义中出现重名参数
        "no-dupe-keys": 2,// 禁止对象字面量中出现重复的 key
        "no-duplicate-case": 2,// 禁止重复的 case 标签
        "no-empty": 2,// 禁止空语句块
        "no-empty-character-class": 2,// 禁止在正则表达式中使用空字符集 (/^abc[]/)
        "no-ex-assign": 2,// 禁止对 catch 子句的参数重新赋值
        "no-extra-boolean-cast": 2,// 禁止不必要的布尔转换
        "no-extra-parens": 1,//  禁止不必要的括号 //(a * b) + c
        "no-extra-semi": 2,// 禁止不必要的分号
        "no-func-assign": 2, // 禁止对 function 声明重新赋值
        "no-invalid-regexp": 2,// 禁止 RegExp 构造函数中无效的正则表达式字符串
        "no-inner-declarations": [2, "functions"],//禁止在嵌套的块中出现 function 或 var 声明
        "no-self-assign":"error",//不允许赋值为自身
        "no-redeclare":"error",//不允许var重复声明
        "no-unreachable": 2,//禁止在return、throw、continue 和 break语句之后出现不可达代码
        "use-isnan": 2,// 要求使用 isNaN() 检查 NaN
        "valid-typeof":"error",//检查与typeof比较的字符串是否正确
        "key-spacing":"off",
        "keyword-spacing":"off",
        "space-before-blocks": 0,
        "space-before-function-paren": 0,
        "one-var":0,
        //es6
        "constructor-super": 0,//强制在子类构造函数中用super()调用父类构造函数
        "no-class-assign":2,// 禁止修改类声明的变量
        "no-this-before-super": 2,// 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        "no-dupe-class-members":2,// 禁止类成员中出现重复的名称
        "prefer-rest-params":2,// 要求使用rest参数而不是arguments
        "prefer-spread":2,// 要求使用扩展运算符而非 .apply()
        "no-var":2,//避免使用var,使用const和let
        "prefer-const":2,//不重新赋值的变量使用const
        "no-const-assign":2,//const类型的变量不能重新赋值
        "prefer-arrow-callback":1,//使用箭头函数=>
        "arrow-spacing":[//箭头=>前后要加空格
            "error",
            {
                "before": true, "after": true
            }
        ]
    }
}