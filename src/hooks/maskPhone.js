// маска для телефона
// export default maskPhone = () => {
//   let input = document.querySelector("#v-input-phone");

//   // Отменяет ввод не цифр
//   let getInputNumbersValue = (input) => {
//     return input.value.replace(/\D/g, "");
//   };

//   let onPhoneInput = (e) => {
//     let input = e.target,
//       inputNumbersValue = getInputNumbersValue(input);
//     formattedInputValue = "";
//     selectionStart = input.selectionStart;

//     // Отменяем ввод не цифр
//     if (!inputNumbersValue) {
//       return (input.value = "");
//     }
//     // определяем редактирование внутри строки
//     if (input.value.length !== selectionStart) {
//       // Отменяем ввод не цифр в середине строки
//       if (e.data && /\D/g.test(e.data)) {
//         input.value = inputNumbersValue;
//         this.value = inputNumbersValue;
//       }
//       return;
//     }

//     if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
//       // русские номера
//       if (inputNumbersValue[0] === "9")
//         inputNumbersValue = "7" + inputNumbersValue;

//       let firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
//       formattedInputValue = firstSymbols + " ";

//       if (inputNumbersValue.length > 1) {
//         formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
//       }

//       if (inputNumbersValue.length >= 5) {
//         formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
//       }

//       if (inputNumbersValue.length >= 8) {
//         formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
//       }

//       if (inputNumbersValue.length >= 10) {
//         formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
//       }
//     } else {
//       // не русские номера
//       formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
//     }

//     input.value = formattedInputValue;
//     this.value = formattedInputValue;
//   };

//   let onPhoneKeyDown = (e) => {
//     let input = e.target;
//     if (e.keyCode === 8 && getInputNumbersValue(input).length === 1) {
//       input.value = "";
//       this.value = "";
//     }
//   };

//   let onPhonePaste = (e) => {
//     let pasted = e.clipboardData || window.clipboardData;
//     (input = e.target), (inputNumbersValue = getInputNumbersValue(input));

//     if (pasted) {
//       let pastedText = pasted.getData("Text");
//       if (/\D/g.test(pastedText)) {
//         input.value = inputNumbersValue;
//         this.value = inputNumbersValue;
//       }
//     }
//   };

//   input.addEventListener("input", onPhoneInput);
//   // обработчик удаления последнего символа
//   input.addEventListener("keydown", onPhoneKeyDown);
//   // обработчик вставки символа внутрь строки
//   input.addEventListener("paste", onPhonePaste);
// }