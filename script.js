let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const btnAll = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectedBtn = document.getElementById('btn-rejected');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')


function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculateCount();

function toggleStyle(id){
    btnAll.classList.remove('bg-blue-400','text-white')
    interviewBtn.classList.remove('bg-blue-400','text-white')
    rejectedBtn.classList.remove('bg-blue-400','text-white')

    btnAll.classList.add('bg-white','text-black')
    interviewBtn.classList.add('bg-white','text-black')
    rejectedBtn.classList.add('bg-white','text-black')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-400','text-white')

}