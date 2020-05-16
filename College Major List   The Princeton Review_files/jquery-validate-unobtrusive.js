/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*
** Unobtrusive validation support library for jQuery and jQuery Validate
** Copyright (C) Microsoft Corporation. All rights reserved.
*/
(function(a){var d=a.validator,b,e="unobtrusiveValidation";function c(a,b,c){a.rules[b]=c;if(a.message)a.messages[b]=a.message}function j(a){return a.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/g)}function f(a){return a.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g,"\\$1")}function h(a){return a.substr(0,a.lastIndexOf(".")+1)}function g(a,b){if(a.indexOf("*.")===0)a=a.replace("*.",b);return a}function m(c,e){var b=a(this).find("[data-valmsg-for='"+f(e[0].name)+"']"),d=b.attr("data-valmsg-replace"),g=d?a.parseJSON(d)!==false:null;b.removeClass("field-validation-valid").addClass("field-validation-error");c.data("unobtrusiveContainer",b);if(g){b.empty();c.removeClass("input-validation-error").appendTo(b)}else c.hide()}function l(e,d){var c=a(this).find("[data-valmsg-summary=true]"),b=c.find("ul");if(b&&b.length&&d.errorList.length){b.empty();c.addClass("validation-summary-errors").removeClass("validation-summary-valid");a.each(d.errorList,function(){a("<li />").html(this.message).appendTo(b)})}}function k(d){var b=d.data("unobtrusiveContainer"),c=b.attr("data-valmsg-replace"),e=c?a.parseJSON(c):null;if(b){b.addClass("field-validation-valid").removeClass("field-validation-error");d.removeData("unobtrusiveContainer");e&&b.empty()}}function n(){var b=a(this);b.data("validator").resetForm();b.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");b.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")}function i(c){var b=a(c),d=b.data(e),f=a.proxy(n,c);if(!d){d={options:{errorClass:"input-validation-error",errorElement:"span",errorPlacement:a.proxy(m,c),invalidHandler:a.proxy(l,c),messages:{},rules:{},success:a.proxy(k,c)},attachValidation:function(){b.unbind("reset."+e,f).bind("reset."+e,f).validate(this.options)},validate:function(){b.validate();return b.valid()}};b.data(e,d)}return d}d.unobtrusive={adapters:[],parseElement:function(b,h){var d=a(b),f=d.parents("form")[0],c,e,g;if(!f)return;c=i(f);c.options.rules[b.name]=e={};c.options.messages[b.name]=g={};a.each(this.adapters,function(){var c="data-val-"+this.name,i=d.attr(c),h={};if(i!==undefined){c+="-";a.each(this.params,function(){h[this]=d.attr(c+this)});this.adapt({element:b,form:f,message:i,params:h,rules:e,messages:g})}});a.extend(e,{__dummy__:true});!h&&c.attachValidation()},parse:function(b){var c=a(b).parents("form").andSelf().add(a(b).find("form")).filter("form");a(b).find(":input").filter("[data-val=true]").each(function(){d.unobtrusive.parseElement(this,true)});c.each(function(){var a=i(this);a&&a.attachValidation()})}};b=d.unobtrusive.adapters;b.add=function(c,a,b){if(!b){b=a;a=[]}this.push({name:c,params:a,adapt:b});return this};b.addBool=function(a,b){return this.add(a,function(d){c(d,b||a,true)})};b.addMinMax=function(e,g,f,a,d,b){return this.add(e,[d||"min",b||"max"],function(b){var e=b.params.min,d=b.params.max;if(e&&d)c(b,a,[e,d]);else if(e)c(b,g,e);else d&&c(b,f,d)})};b.addSingleVal=function(a,b,d){return this.add(a,[b||"val"],function(e){c(e,d||a,e.params[b])})};d.addMethod("__dummy__",function(){return true});d.addMethod("regex",function(b,c,d){var a;if(this.optional(c))return true;a=(new RegExp(d)).exec(b);return a&&a.index===0&&a[0].length===b.length});d.addMethod("nonalphamin",function(c,d,b){var a;if(b){a=c.match(/\W/g);a=a&&a.length>=b}return a});if(d.methods.extension){b.addSingleVal("accept","mimtype");b.addSingleVal("extension","extension")}else b.addSingleVal("extension","extension","accept");b.addSingleVal("regex","pattern");b.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");b.addMinMax("length","minlength","maxlength","rangelength").addMinMax("range","min","max","range");b.addMinMax("minlength","minlength").addMinMax("maxlength","minlength","maxlength");b.add("equalto",["other"],function(b){var i=h(b.element.name),j=b.params.other,d=g(j,i),e=a(b.form).find(":input").filter("[name='"+f(d)+"']")[0];c(b,"equalTo",e)});b.add("required",function(a){(a.element.tagName.toUpperCase()!=="INPUT"||a.element.type.toUpperCase()!=="CHECKBOX")&&c(a,"required",true)});b.add("remote",["url","type","additionalfields"],function(b){var d={url:b.params.url,type:b.params.type||"GET",data:{}},e=h(b.element.name);a.each(j(b.params.additionalfields||b.element.name),function(i,h){var c=g(h,e);d.data[c]=function(){return a(b.form).find(":input").filter("[name='"+f(c)+"']").val()}});c(b,"remote",d)});b.add("password",["min","nonalphamin","regex"],function(a){a.params.min&&c(a,"minlength",a.params.min);a.params.nonalphamin&&c(a,"nonalphamin",a.params.nonalphamin);a.params.regex&&c(a,"regex",a.params.regex)});a(function(){d.unobtrusive.parse(document)})})(jQuery);

// ------------------------------------------------------------------------
// client-side auth for MustBeTrue DataAnnotation
jQuery.validator.addMethod("mustbetrue", function (value, element, param) {
	return element.checked;
});
jQuery.validator.unobtrusive.adapters.addBool("mustbetrue");

// client-side auth for DynamicRange DataAnnotation
jQuery.validator.addMethod('dynamicrange', function (value, element, params) {
	var namePrefix = ''
	var elementName = jQuery(element).attr('name')
	if (elementName.indexOf('.') > 0) namePrefix = elementName.substring(0, elementName.lastIndexOf('.') + 1)
	var minValue = parseInt($('input[name$="' + namePrefix + params.minvalueproperty + '"]').val(), 10);
	var maxValue = parseInt($('input[name$="' + namePrefix + params.maxvalueproperty + '"]').val(), 10);
	var currentValue = parseFloat(value, 10);
	if (isNaN(minValue) || isNaN(maxValue) || isNaN(currentValue) || minValue > currentValue || currentValue > maxValue) {
		var message = $(element).attr('data-val-dynamicrange');
		$.validator.messages.dynamicrange = $.validator.format(message, minValue, maxValue);
		return false;
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('dynamicrange', ['minvalueproperty', 'maxvalueproperty'],
	function (options) {
		options.rules['dynamicrange'] = options.params;
		if (options.message != null) {
			$.validator.messages.dynamicrange = options.message;
		}
	}
);


// ------------------------------------------------------------------------
// client-side auth for DynamicRegularExpression DataAnnotation
jQuery.validator.addMethod('dynamicregex', function (value, element, params) {
	var namePrefix = ''
	var elementName = jQuery(element).attr('name')
	if (elementName.indexOf('.') > 0) namePrefix = elementName.substring(0, elementName.lastIndexOf('.') + 1)
	var regexPattern = $('input[name$="' + namePrefix + params.propertyname + '"]').val();
	var regex = new RegExp(regexPattern);

	if (!regex.test(value)) {
		var message = $(element).attr('data-val-dynamicregex');
		$.validator.messages.dynamicregex = $.validator.format(message, regexPattern);
		return false;
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('dynamicregex', ['propertyname'],
	function (options) {
		options.rules['dynamicregex'] = options.params;
		if (options.message != null) {
			$.validator.messages.dynamicregex = options.message;
		}
	}
);


// ------------------------------------------------------------------------
// client-side auth for Modulus DataAnnotation
jQuery.validator.addMethod('modulus', function (value, element, params) {
	var namePrefix = ''
	var elementName = jQuery(element).attr('name')
	if (elementName.indexOf('.') > 0) namePrefix = elementName.substring(0, elementName.lastIndexOf('.') + 1)
	var modulus = $('input[name$="' + namePrefix + params.modulusproperty + '"]').val();
	var value = $('input[name$="' + namePrefix + params.valueproperty + '"]').val();

	if (value % modulus) {
		var message = $(element).attr('data-val-modulus');
		$.validator.messages.modulus = $.validator.format(message, modulus, value);
		return false;
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('modulus', ['modulusproperty', 'valueproperty'],
	function (options) {
		options.rules['modulus'] = options.params;
		if (options.message != null) {
			$.validator.messages.modulus = options.message;
		}
	}
);

$.validator.addMethod("formatteddate",
	function (value, element) {
		return value.match(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/);
	},
	"Please enter a date in the format mm/dd/yyyy"
);

jQuery.validator.unobtrusive.adapters.add('formatteddate',
	function (options) {
		options.rules['formatteddate'] = options.params;
		if (options.message != null) {
			$.validator.messages.formatteddate = options.message;
		}
	}
);


// ------------------------------------------------------------------------
// client-side auth for CompareNumbers DataAnnotation
$.validator.addMethod('comparenumbers', function (value, element, params) {
	var otherFieldValue = $('input[name="' + params.otherpropertyname + '"]').val();
	if (otherFieldValue && value) {
		var currentValue = parseFloat(value);
		var otherValue = parseFloat(otherFieldValue);
		if ($(element).attr('name').toLowerCase().indexOf('min') >= 0) {
			if (params.allowequality) {
				if (currentValue > otherValue) {
					return false;
				}
			} else {
				if (currentValue >= otherValue) {
					return false;
				}
			}
		} else {
			if (params.allowequality) {
				if (currentValue < otherValue) {
					return false;
				};
			} else {
				if (currentValue <= otherValue) {
					return false;
				};
			}
		}
	}
	customValidation.addDependatControlValidaitonHandler(element, params.otherpropertyname);
	return true;
}, '');

$.validator.unobtrusive.adapters.add('comparenumbers', ['otherpropertyname', 'allowequality'],
    function (options) {
    	options.rules['comparenumbers'] = options.params;
    	if (options.message) {
    		options.messages['comparenumbers'] = options.message;
    	}
    }
);

//valid year 1800-2100
$.validator.addMethod("validyear",
	function (value, element) {
		return this.optional(element) || value.match(/^(1[8-9][0-9]\d|20[0-9]\d|2100)$/);
	},
	"Please enter a valid year (1800-2100)"
);

jQuery.validator.unobtrusive.adapters.add('validyear',
	function (options) {
		options.rules['validyear'] = options.params;
		if (options.message != null) {
			$.validator.messages.validyear = options.message;
		}
	}
);

//valid age 18-99
$.validator.addMethod("validage",
	function (value, element) {
		return this.optional(element) || value.match(/^(1[89]|[2-9][0-9])$/);
	},
	"Please enter a valid age (18-99)"
);

jQuery.validator.unobtrusive.adapters.add('validage',
	function (options) {
		options.rules['validage'] = options.params;
		if (options.message != null) {
			$.validator.messages.validyear = options.message;
		}
	}
);

//format phone number
$.validator.addMethod("formattedphone",
	function (value, element) {
		return this.optional(element) || value.match(/^\+?[\d\s-]*\d$/);
	},
	"Digits, spaces, and hyphens allowed. E.g. 415-555-2671, +442071838750"
);

jQuery.validator.unobtrusive.adapters.add('formattedphone',
	function (options) {
		options.rules['formattedphone'] = options.params;
		if (options.message != null) {
			$.validator.messages.formattedphone = options.message;
		}
	}
);

// ------------------------------------------------------------------------
// client-side auth for requiredIf
jQuery.validator.addMethod('requiredif', function (value, element, params) {
	var $conditionElement = $($(element).attr('data-val-requiredif'));
	var isConditionSet = false;

	if ($conditionElement.is(":radio") || $conditionElement.is(":checkbox")) {
		isConditionSet = $conditionElement.is(":checked");
	} else if ($conditionElement.is("select")) {
		isConditionSet = $conditionElement.find("option:selected").length > 0;
	} else {
		isConditionSet = $conditionElement.val() != "";
	}

	if (isConditionSet) {
		if (value.length == 0) {
			var message = "This field is required.";
			$.validator.messages.requiredif = $.validator.format(message);
			return false;
		}
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('requiredif',
	function (options) {
		options.rules['requiredif'] = options.params;
		if (options.message != null) {
			$.validator.messages.requiredif = options.message;
		}
	}
);


jQuery.validator.addMethod("notequal", function (value, element, params) {
	var valueToNotEqual = $('input[name$="' + params.notequal + '"]').val();

	return this.optional(element) || value != valueToNotEqual;
}, "Please specify a different value");

jQuery.validator.unobtrusive.adapters.add('notequal', ['notequal'],
	function (options) {
		options.rules['notequal'] = options.params;
		if (options.message != null) {
			$.validator.messages.notequal = options.message;
		}
	}
);