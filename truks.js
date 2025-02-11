// الحصول على العناصر
const buttons = document.querySelectorAll("#btn");
const inputField = document.querySelector(".input");
const resultField = document.querySelector("#result h4");
const roundField = document.getElementById("round");
let totalScore = 0;
let currentRound = 1; // لعدد الجولات
let currentButton = null; // لتتبع الزر الحالي

// إضافة حدث لكل زر
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // قفل الزر الحالي
        if (currentButton) {
            currentButton.disabled = true; // قفل الزر السابق
        }
        currentButton = button; // تحديث الزر الحالي
        button.disabled = true; // قفل الزر الحالي
    });
});

// حدث للزر "ادخال"
document.getElementById("inp").addEventListener("click", () => {
    if (!currentButton) {
        alert("يرجى اختيار زر أولاً");
        return;
    }

    const inputValue = parseInt(inputField.value);

    // تحقق من الزر المعطل
    const buttonClass = currentButton.className;

    let validInput = true; // لتتبع صحة الإدخال
    if (buttonClass === "Q") {
        if (inputValue > 4) {
            alert("الرقم المدخل يجب أن يكون أقل من أو يساوي 4");
            validInput = false;
        } else {
            totalScore += (-25 * inputValue);
        }
    } else if (buttonClass === "D") {
        if (inputValue > 13) {
            alert("الرقم المدخل يجب أن يكون أقل من أو يساوي 13");
            validInput = false;
        } else {
            totalScore += (-10 * inputValue);
        }
    } else if (buttonClass === "L") {
        if (inputValue > 13) {
            alert("الرقم المدخل يجب أن يكون أقل من أو يساوي 13");
            validInput = false;
        } else {
            totalScore += (-15 * inputValue);
        }
    } else if (buttonClass === "K") {
        if (inputValue > 1) {
            alert("الرقم المدخل يجب أن يكون أقل من أو يساوي 1");
            validInput = false;
        } else {
            totalScore += (-75 * inputValue);
        }
    } else if (buttonClass === "T") {
        totalScore += inputValue; // إضافة الرقم المدخل
    }

    // إذا كان الإدخال صحيحًا، قم بتحديث النتيجة
    if (validInput) {
        resultField.textContent = totalScore;

        // قفل الزر الحالي بعد إدخال القيمة
        currentButton.disabled = true; // قفل الزر بعد إدخال القيمة
        inputField.value = ''; // إعادة تعيين حقل الإدخال

        // تحقق مما إذا كانت جميع الأزرار مغلقة
        if (Array.from(buttons).every(btn => btn.disabled)) {
            currentRound++;
            roundField.textContent = "الجولة: " + currentRound; // تحديث الجولة
            
            // إعادة تفعيل جميع الأزرار بعد 2 ثانية
            setTimeout(() => {
                buttons.forEach(btn => btn.disabled = false); // إعادة تفعيل جميع الأزرار
                currentButton = null; // إعادة تعيين الزر الحالي
            }, 2000); // إعادة تفعيل الأزرار بعد 2 ثانية
        }
    }
});