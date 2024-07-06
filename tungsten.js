
/**
 * 
 */
const BAR_NORMAL_TITLE = 0;
const BAR_UPPER_TITLE = 1;
const BAR_LOWER_TITLE = 2;
const BAR_CAP_TITLE = 3;

const BAR_TITLE_WIDE = 1;
const BAR_TITLE_CENTER = 2;
const BAR_TITLE_RIGHT = 4;

const BAR_NT = 0;
const BAR_UT = 1;
const BAR_LT = 2;
const BAR_CT = 4;

const BAR_TW = 8;
const BAR_TC = 16;
const BAR_TR = 32;


// Default options for title bar, used if you don't provide any
const BAR_DEFAULT_OPT = BAR_TITLE_WIDE | BAR_TITLE_CENTER;


/**
 * 
 * @param {*} msg 
 */
function TDWarning(msg){

}



/**
 * 
 * @param {*} str 
 * @returns 
 */
function TDCapitaliseTitle(str) {
    const cap = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    let words = str.split(" ");
    let capw = words.map((w) => cap(w));
    return capw.join(" ");
}

/**
 * 
 * @param {*} width 
 */
function TDDrawLine(width){
    let line = "\x1b[32m\x1b[5m";
    for (let x = 0; x < width; x++) ((x == 0) || (x == width-1)) ? line += "+": line += "-";
    console.log(line, "\x1b[0m");
}


/**
 * 
 * @param {*} barTitle 
 * @param {*} titleOptions 
 * @param {*} barOptions 
 * @param {*} boxWidth 
 */
function TDDrawBar(barTitle, titleOptions = 0, barOptions, boxWidth = 80){
    
    let width = boxWidth;
    let str_length = barTitle.length;
    let lmargin = 2;

    let line = "";
    let str = "";

    if (!titleOptions){
        titleOptions = BAR_DEFAULT_OPT;
    }

    if(boxWidth == 0) {
        width = barTitle.length + 5;
        if(titleOptions & BAR_TITLE_WIDE) {
            width = (barTitle.length* 2) + 5;
        } 
    }

    
    switch (barOptions) {
        case BAR_NORMAL_TITLE:
            str = barTitle;        
            break;
    
        case BAR_UPPER_TITLE:
            str = barTitle.toUpperCase();     
            break;
    
        case BAR_LOWER_TITLE:
            str = barTitle.toLowerCase(); 
            break;
                
        case BAR_CAP_TITLE:
            str = TDCapitaliseTitle(barTitle);
            break;

        default:
            break;
    }

    if(titleOptions & BAR_TITLE_WIDE){
        let s2 = "";
        for(let x = 0; x < str_length; x++){
            s2 += str[x];
            if(x < str_length-1) s2+=" ";
        }
        str = s2;
        str_length = str.length;
    }

    if(titleOptions & BAR_TITLE_RIGHT){
        lmargin = width - str_length - 2;
    }

    if(titleOptions & BAR_TITLE_CENTER){
        lmargin = Math.floor((width/2 - str_length/2));
    }


    TDDrawLine(width);

    for (let x = 0; x < width; x++) {
        if((x == 0) || (x == width-1)) {
            line += "|";
        } else if (x >= lmargin && x < lmargin + str_length){
            line += str[x-lmargin];
        } else {
            line += " ";
        }
    }
    console.log(line); line = "";
    
    TDDrawLine(width);
    
}




/**
 * 
 * @param {*} title 
 * @param {*} titleOptions 
 * @param {*} barOptions 
 * @param {*} width 
 */
function TDDrawWindow(title, titleOptions = 0, barOptions = 0, width = 0){
    
    TDDrawBar(title, titleOptions, barOptions, width);


}



/**
 * 
 * @param {*} data 
 * @param {*} headerTitle 
 * @param {*} windowType 
 * @param {*} winOptions 
 */
function TDDraw(data, headerTitle = "", windowType = 0, winOptions = 0){

}

TDDrawWindow("Dataset from database query", 0, BAR_LOWER_TITLE, 100);


