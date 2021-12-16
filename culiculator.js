function culiculate_bmi(){
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	let bmi = Math.round((weight / (height/100*height/100))*10)/10;
	let result = document.getElementById("result");
	if (weight=="") {
		if (height=="") {
			result.innerHTML = "体重と身長をを入力してください";
		}else{
		result.innerHTML = "体重を入力してください";
		}
	}else if (height=="") {
		result.innerHTML = "身長を入力してください";
	}else if (isNaN(weight)) {
		if (isNaN(height)) {
			result.innerHTML = "体重と身長を半角数字で入力してください"
		} else {
		result.innerHTML = "体重を半角数字で入力してください"
		}
	}else if (isNaN(height)) {
		result.innerHTML = "身長を半角数字で入力してください"
	}
	else{
		result.innerHTML = "BMI = " + bmi; //BMIの表示

		let body_shape;
		if (bmi<18.5) {
			body_shape = "低体重(やせ型)";
		} else if (bmi<25) {
			body_shape = "普通体重";
		} else if (bmi<30) {
			body_shape = "肥満(1度)";
		} else if (bmi<35) {
			body_shape = "肥満(2度)";
		} else {
			body_shape = "肥満(3度)";
		}
		body_shape = "あなたの体型は" + body_shape + "です。"
		document.getElementById("body_shape").innerHTML = body_shape; //肥満度合いの表示

		let proper_weight;
		proper_weight = height*height*22/10000;
		proper_weight = (Math.round(proper_weight*10)/10);
		document.getElementById("proper_weight").innerHTML = "あなたの適正体重は" + proper_weight + "kgです。"  //適正体重の表示


		/*表の非表示と表示を切り替える機能*/
		document.getElementById("my-height").innerHTML = height;  //身長を表の最初に反映

		let bmi_table_title = document.getElementById("bmi-table-title");
		let bmi_table = document.getElementById("bmi-table");
		bmi_table_title.style.display = "block";
		bmi_table.style.display = "block";

		height = height*height/1000;
		weight1 = Math.round(height * 18.5)/10 + "kg";
		weight2 = Math.round(height * 25)/10 + "kg";
		weight3 = Math.round(height * 30)/10 + "kg";
		weight4 = Math.round(height * 35)/10 + "kg";

		bmi1 = weight1 + "未満";
		bmi2 = weight1 + "以上" + weight2 + "未満";
		bmi3 = weight2 + "以上" + weight3 + "未満";
		bmi4 = weight3 + "以上" + weight4 + "未満";
		bmi5 = weight4 + "以上";

		document.getElementById("bmi1").innerHTML = bmi1;
		document.getElementById("bmi2").innerHTML = bmi2;
		document.getElementById("bmi3").innerHTML = bmi3;
		document.getElementById("bmi4").innerHTML = bmi4;
		document.getElementById("bmi5").innerHTML = bmi5;

		if (bmi<18.5) {
			document.getElementById("bmi-table1").style.color = "red";
			document.getElementById("bmi-table1").style.fontWeight = "bold";
			document.getElementById("bmi-table2").style.color = "black";
			document.getElementById("bmi-table2").style.fontWeight = "normal";
			document.getElementById("bmi-table3").style.color = "black";
			document.getElementById("bmi-table3").style.fontWeight = "normal";
			document.getElementById("bmi-table4").style.color = "black";
			document.getElementById("bmi-table4").style.fontWeight = "normal";
			document.getElementById("bmi-table5").style.color = "black";
			document.getElementById("bmi-table5").style.fontWeight = "normal";
} else if (bmi<25) {
			document.getElementById("bmi-table1").style.color = "black";
			document.getElementById("bmi-table1").style.fontWeight = "normal";
			document.getElementById("bmi-table2").style.color = "red";
			document.getElementById("bmi-table2").style.fontWeight = "bold";
			document.getElementById("bmi-table3").style.color = "black";
			document.getElementById("bmi-table3").style.fontWeight = "normal";
			document.getElementById("bmi-table4").style.color = "black";
			document.getElementById("bmi-table4").style.fontWeight = "normal";
			document.getElementById("bmi-table5").style.color = "black";
			document.getElementById("bmi-table5").style.fontWeight = "normal";
		} else if (bmi<30) {
			document.getElementById("bmi-table1").style.color = "black";
			document.getElementById("bmi-table1").style.fontWeight = "normal";
			document.getElementById("bmi-table2").style.color = "black";
			document.getElementById("bmi-table2").style.fontWeight = "normal";
			document.getElementById("bmi-table3").style.color = "red";
			document.getElementById("bmi-table3").style.fontWeight = "bold";
			document.getElementById("bmi-table4").style.color = "black";
			document.getElementById("bmi-table4").style.fontWeight = "normal";
			document.getElementById("bmi-table5").style.color = "black";
			document.getElementById("bmi-table5").style.fontWeight = "normal";
		} else if (bmi<35) {
			document.getElementById("bmi-table1").style.color = "black";
			document.getElementById("bmi-table1").style.fontWeight = "normal";
			document.getElementById("bmi-table2").style.color = "black";
			document.getElementById("bmi-table2").style.fontWeight = "normal";
			document.getElementById("bmi-table3").style.color = "black";
			document.getElementById("bmi-table3").style.fontWeight = "normal";
			document.getElementById("bmi-table4").style.color = "red";
			document.getElementById("bmi-table4").style.fontWeight = "bold";
			document.getElementById("bmi-table5").style.color = "black";
			document.getElementById("bmi-table5").style.fontWeight = "normal";
		} else {
			document.getElementById("bmi-table1").style.color = "black";
			document.getElementById("bmi-table1").style.fontWeight = "normal";
			document.getElementById("bmi-table2").style.color = "black";
			document.getElementById("bmi-table2").style.fontWeight = "normal";
			document.getElementById("bmi-table3").style.color = "black";
			document.getElementById("bmi-table3").style.fontWeight = "normal";
			document.getElementById("bmi-table4").style.color = "black";
			document.getElementById("bmi-table4").style.fontWeight = "normal";
			document.getElementById("bmi-table5").style.color = "red";
			document.getElementById("bmi-table5").style.fontWeight = "bold";
		}

	}

}