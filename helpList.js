// let str = '([{}])';
// //console.log(str.join(' '));
// console.log(str.split(''));
// console.log(str.length);

// function check(str, bracketsConfig) {

//     bracketsConfig = bracketsConfig.forEach(el => el.join(''));
//     for (let i = 0; i < bracketsConfig.length;){
//         if(str.includes(bracketsConfig[i])){
//             str = str.replace(bracketsConfig[i], '');
//             i = 0;
//             continue;
//         }
//         i += 1;
//     }
//     if (str.length === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

function check(str, bracketsConfig) {
    let avString = str;
    console.log(str);
    console.log(str.length);
    console.log(str.split``, "- косые скобки");
    console.log(str.split(""), "- простые скобки");
    console.log(bracketsConfig, "- pure");
    console.log(Object.fromEntries(bracketsConfig), "- Object");
    console.log(
        bracketsConfig.map((el) => el.join("")),
        "- map function + join"
    );
    console.log(
        bracketsConfig.map((e) => e),
        "- map function - pure"
    );
    console.log(bracketsConfig.length, "- bracketsConfig.length");
    bracketsConfig.forEach((element) =>
        console.log(element, "- forEach function")
    );
    bracketsConfig.forEach((el) =>
        console.log(el.join(""), "- forEach function + join")
    );
    //let test = bracketsConfig.map(function())
    //console.log(bracketsConfig.map())
    console.log(bracketsConfig.flat(), "- flat-br");
    console.log(bracketsConfig.join(""), "- join-br");
    console.log(bracketsConfig.join("").replace(/,/g, ""), "- join-replace-br");
    console.log(
        bracketsConfig.join("").replace(/,/g, "").replace(/\(\)/g, "\\(\\)"),
        "- join-replace-br-++"
    );
    console.log(
        bracketsConfig
            .join("")
            .replace(/,/g, "")
            .replace(/\(\)/g, "\\(\\)")
            .replace(/\|\|/g, "\\|\\|"),
        "- join-replace-br-++-++"
    );
    console.log(
        bracketsConfig
            .join("")
            .replace(/,/g, "")
            .replace(/\(\)/g, "\\(\\)")
            .replace(/\|\|/g, "\\|\\|")
            .replace(/-/g, "|"),
        "- join-replace-br-++-++-++"
    );
    let newBracketsConfig = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        newBracketsConfig.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
        console.log(bracketsConfig[i][0], "- first");
        console.log(bracketsConfig[i][1], "- second");
        console.log(newBracketsConfig, "-result");
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < newBracketsConfig.length; j++) {
            avString = avString.replace(newBracketsConfig[j], "");
        }
        if (avString.length == 0) return true;
    }
    return false;
}

console.log(
    check(
        "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()",
        [
            ["(", ")"],
            ["[", "]"],
            ["{", "}"],
            ["|", "|"],
        ]
    )
);
