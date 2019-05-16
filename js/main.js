$(".box").flip({
    reverse: true,
    axis: 'y',
    trigger: 'manual',
    speed: 500
});
// $(".box").off(".flip");

let gambar = [
    '<i class="fas fa-coffee"></i>',
    '<i class="fas fa-code-branch"></i>',
    '<i class="fas fa-file-alt"></i>',
    '<i class="fas fa-hashtag"></i>',
    '<i class="fas fa-link"></i>',
    '<i class="fas fa-network-wired"></i>',
    '<i class="fas fa-smile-wink"></i>',
    '<i class="fas fa-smile-beam"></i>',
    '<i class="fas fa-smile"></i>',
    '<i class="fas fa-terminal"></i>',
    '<i class="fas fa-wifi"></i>',
    '<i class="fas fa-user-alt"></i>',
    '<i class="fas fa-thumbs-up"></i>',
    '<i class="fas fa-tags"></i>',
    '<i class="fas fa-sync-alt"></i>',
    '<i class="fas fa-table"></i>',
    '<i class="fas fa-angry"></i>',
    '<i class="fas fa-apple-alt"></i>',
];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;    
    }

    return array;
}
gambar = gambar.concat(gambar);
gambar = shuffle(gambar);
// console.log(gambar);
// console.log($('.box'));
// $('.box .inner').append('<i class="fas fa-coffee"></i>');

let countKlik = 0;
let delay = 500;
let boxs = $('.box');
console.log(boxs);

function tutupSemua() {
    countKlik = 0;
    selectedBox = [];
    $(boxs).flip(false);
}

let selectedBox = [];
for (let i = 0; i < boxs.length; i++) {
    $(boxs).addClass('tutup');
    
    $('.inner',boxs[i]).append(gambar[i]);
    $(boxs[i]).on('click',function () { 
        if($(this).hasClass('tutup')){
            countKlik += 1;
            if(countKlik > 2){       
                $(boxs).flip(false);
            }
            if(countKlik == 1){
                $(this).flip(true);
                selectedBox.push($(this));
            }
            if(countKlik == 2){
                countKlik = 0;
                $(this).flip(true);
                selectedBox.push($(this));
                console.log(selectedBox[0]);
                
                let class1 = $('i',selectedBox[0]).attr('class').split(' ').pop();
                let class2 = $('i',selectedBox[1]).attr('class').split(' ').pop();
                let index1=$('.box').index(selectedBox[0]);
                
                let index2=$('.box').index(selectedBox[1]);
                // console.log(class1);
                // console.log(class2);
                
                if(class1 == class2 && !(index1 == index2)){
                    countKlik = 0;
                    index1 = $(boxs).index(selectedBox[0]);
                    boxs.splice(index1, 1);
                    index2 = $(boxs).index(selectedBox[1]);
                    boxs.splice(index2, 1);

                    $('i').has('.'+class1).closest('.box').removeClass('tutup');
                    selectedBox = [];
                }else{
                    countKlik = 0;
                    selectedBox = [];
                    setTimeout(tutupSemua, delay);
                }
                selectedBox = [];
            }
        }
        
     });    

    
}
console.log(boxs);



// $("body").on('click','.box',function(){
//     // console.log(selectedBox);
//     $('.box').index(this);
//     countKlik += 1;
    
//     if(countKlik == 1){
//         $(this).flip(true);
//         selectedBox.push($(this));
//     }
//     if(countKlik == 2){
//         selectedBox.push($(this));
//         $(this).flip(true);
//         let class1 = (selectedBox[0],'i');
//         console.log(class1);
        
//         let class2 = selectedBox[1];
//         if(class1 == class2){
//             alert('benar');
//         }
//         setTimeout(tutupSemua, delay);
//     }
//     if(countKlik > 2){
//         $(".box").flip(false);
//         countKlik = 0;
//     }
// })