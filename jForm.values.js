forms = {
    values: function (formName) {
        var value = {};
        //var radioName = '';
        $("#" + formName).find("[data-text='text']").each(function (index, domEle) {
            var name = $(domEle).attr("name");
            value[name] = $(domEle).val();
            //alert(value[name]);
        });
        $("#" + formName).find("[data-text='select']").each(function (index, domEle) {
            var name = $(domEle).attr("name");
            value[name] = $(domEle).find("option:selected").val();
            //alert(value[name]);
        });
        $("#" + formName).find("[data-text='checkbox']").each(function (index, domEle) {
            var checkArr = [];
            var name = $(domEle).attr("name");
            if ($(domEle).filter(":checked").val() != undefined) {
                if (value[name]) {
                    checkArr = value[name];
                    checkArr.push($(domEle).val());
                    value[name] = checkArr;
                } else {
                    checkArr.push($(domEle).val());
                    value[name] = checkArr;
                }
            }
            //alert(value[name]);
        });
        $("#" + formName).find("[data-text='radio']").each(function (index, domEle) {
            var name = $(domEle).attr("name");
            if (!value[name] && $(domEle).filter(":checked").val() != undefined) {
                value[name] = $(domEle).filter(":checked").val();
            }
            //alert(value[name]);
        });
       return value;
    },
    resetValues: function (formName, data) {
        $("#" + formName).find("[data-text]").each(function (index, domEle) {
            var name = $(domEle).attr("name");
            if (data[name] != undefined) {
                switch ($(domEle).attr("data-text")) {
                    case "text":
                        $(domEle).val(data[name]);
                        break;
                    case "select":
                        $(domEle).find("option[value='" + data[name] + "']").attr("selected", true);
                        break;
                    case "checkbox":
                        $.each(data[name],function(index,value) {
                            $("#" + formName).find("[name='" + name + "']").filter("[value='" + value + "']").attr("checked", true);
                        });
                        break;
                    case "radio":
                        $("#" + formName).find("[name='" + name + "']").filter("[value='" + data[name] + "']").attr("checked", true);
                        break;
                }
            }
        });
    }
};
