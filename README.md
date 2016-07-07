# JForm
用于HTML的表单初始化赋值和表单数据提交的轻量级Jquery插件

| 类型            | 配置                   |
| ------------- | -------------------- |
| text、textarea | data-text="text"     |
| checkbox      | data-text="checkbox" |
| select        | data-text="select"   |
| radio         | data-text="radio"    |
### 表单赋值

目前只支持Json格式数据进行表单初始化


`调用方式：`

```javascript
forms.resetValues(formID,jsonData);
```

`Demo`

```javascript
<body>
<div>
    <form method="post" id="formDemo">
        <input name="first" type="text" data-text="text">
        <textarea name="firstArea" cols="20" rows="5" data-text="text"></textarea>
        <input type="checkbox" name="checkboxFirst" value="1" data-text="checkbox">1
        <input type="checkbox" name="checkboxFirst" value="2" data-text="checkbox">2
        <select name="selectFirst" data-text="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <input type="radio" name="radioFisrt" value="1" data-text="radio">1
        <input type="radio" name="radioFisrt" value="2" data-text="radio">2
    </form>
</div>
</body>
<script>
    $(function(){
        setValue();
        function setValue(){
            var json={first:"11",firstArea:"22",checkboxFirst:[1],checkboxSecond:[4],selectFirst:3,radioFisrt:2,radioSecond:2};
            forms.resetValues("formDemo",json);
        }
    });
</script>
```

### 获取表单值

最后获取得到的是Json对象

`调用方式`

```javascript
forms.values(formID);
```

`Demo`

```javascript
<body>
<div>
    <form method="post" id="formDemo">
        <input name="first" type="text" data-text="text">
        <textarea name="firstArea" cols="20" rows="5" data-text="text"></textarea>
        <input type="checkbox" name="checkboxFirst" value="1" data-text="checkbox">1
        <input type="checkbox" name="checkboxFirst" value="2" data-text="checkbox">2
        <select name="selectFirst" data-text="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <input type="radio" name="radioFisrt" value="1" data-text="radio">1
        <input type="radio" name="radioFisrt" value="2" data-text="radio">2
        <button onclick="getValue();">确定</button>
    </form>
</div>
</body>
<script>
     function getValue(){       
         forms.values("formDemo");
     }
  
</script>
```

以上

------

**作者：**@迹_Jason

**更新日期：**2016/07/07

**微信号：**zoeminghong

**微信公众号：**APPZone