let interviewList = [];
let rejectedList = [];

let currentStatus = 'all'


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const btnAll = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectedBtn = document.getElementById('btn-rejected');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')

const filterSection = document.getElementById('filtered-section')


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

    currentStatus = id

    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-400','text-white')
    
    
    if(id == 'btn-interview'){
        allCardSection.classList.add('hidden')
        filterSection.classList.add('hidden')
        emptyPart.classList.add('hidden')
        if(interviewList.length == 0){
            emptyPart.classList.remove('hidden')
        }
        else{
            filterSection.classList.remove('hidden')
            renderInterview()
        }
        
    }
    else if(id == 'btn-all'){
         
        allCardSection.classList.remove('hidden')
        filterSection.classList.add('hidden')
        emptyPart.classList.add('hidden')

    }
    else if(id == 'btn-rejected'){

        allCardSection.classList.add('hidden')
        filterSection.classList.add('hidden')
        emptyPart.classList.add('hidden')
        if(rejectedList.length == 0){
            emptyPart.classList.remove('hidden')
        }
        else{
            filterSection.classList.remove('hidden')
            renderRejected()
        }

        
    }


}

mainContainer.addEventListener('click',function(event){

   if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobName = parentNode.querySelector('.job-name').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.status').classList.remove('bg-blue-100','inline-block', 'px-3' ,'py-1', 'rounded-md' ,'font-semibold')
    parentNode.querySelector('.status').innerHTML = '<button class="interview-btn font-semibold text-green-500 border border-green-500 rounded-md px-4 py-2">Interview</button>'

    
    const cardInfo = {
        companyName,
        jobName,
        jobType,
        status:'Interview',
        notes
    }
    const jobExists =  interviewList.find(item => item.companyName == cardInfo.companyName)
    

    if(!jobExists){
       interviewList.push(cardInfo)
    }
    rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName)

    if(currentStatus == 'btn-interview'){
        renderInterview();
    }

    calculateCount();
    // renderInterview()
   }
    else if(event.target.classList.contains('rejected-btn')){
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobName = parentNode.querySelector('.job-name').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.status').classList.remove('bg-blue-100','inline-block', 'px-3' ,'py-1', 'rounded-md' ,'font-semibold')
    parentNode.querySelector('.status').innerHTML = ' <button class="rejected-btn font-semibold text-red-500 border border-red-500 rounded-md px-4 py-2">Rejected</button>'

    
    const cardInfo = {
        companyName,
        jobName,
        jobType,
        status:'Rejected',
        notes
    }
    const jobExists =  rejectedList.find(item => item.companyName == cardInfo.companyName)
    

    if(!jobExists){
       rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName)
    
    if(currentStatus == 'btn-rejected'){
        renderRejected();
    }

    calculateCount();
    // renderRejected()
}

    else if(event.target.closest('.btn-delete')){
        const parentNode = event.target.closest('.card');
        const companyName = parentNode.querySelector('.company-name').innerText;

        interviewList = interviewList.filter(item => item.companyName !== companyName)
        rejectedList = rejectedList.filter(item => item.companyName !== companyName)

        const allCards = allCardSection.querySelectorAll('.card')
        allCards.forEach(c=>{
            const name = c.querySelector('.company-name').innerText;
            if(name == companyName){
                c.remove();
            }
        })

        
        if(currentStatus == 'btn-interview'){
            renderInterview();
        }
        else if(currentStatus == 'btn-rejected'){
            renderRejected();
        }


    calculateCount();

    }

})

function renderInterview(){
    filterSection.innerHTML = '';
    for(let interview of interviewList){
        
        let div = document.createElement('div')
        
        div.className = 'card flex justify-between bg-white rounded-2xl p-6 ';
        div.innerHTML = `
                <div class="space-y-5"> 
                    <div>
                        <h2 class="company-name text-xl font-semibold">${interview.companyName}</h2>
                        <p class="job-name text-[#64748B]">${interview.jobName}</p>
                    </div>
                    <div>
                        <p class="job-type text-[#64748B]">${interview.jobType}</p>
                    </div>
                    <div>
                        <p class="status font-semibold inline-block text-green-500 ">${interview.status}</p>
                        <p class="notes text-[#64748B]">${interview.notes}</p>
                    </div>
                    <div class="flex gap-4">
                        <button class="interview-btn font-semibold text-green-500 border border-green-500 rounded-md px-4 py-2">Interview</button>
                        <button class="rejected-btn font-semibold text-red-500 border border-red-500 rounded-md px-4 py-2">Rejected</button>
                    </div>
                </div>
                <div>
                    <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            `
        filterSection.appendChild(div)
    }
}
function renderRejected(){
    filterSection.innerHTML = '';
    for(let rejected of rejectedList){
        
        let div = document.createElement('div')
        div.className = 'card flex justify-between bg-white rounded-2xl p-6';
        div.innerHTML = `
                <div class="space-y-5"> 
                    <div>
                        <h2 class="company-name text-xl font-semibold">${rejected.companyName}</h2>
                        <p class="job-name text-[#64748B]">${rejected.jobName}</p>
                    </div>
                    <div>
                        <p class="job-type text-[#64748B]">${rejected.jobType}</p>
                    </div>
                    <div>
                        <p class="status inline-block font-semibold text-red-500">${rejected.status}</p>
                        <p class="notes text-[#64748B]">${rejected.notes}</p>
                    </div>
                    <div class="flex gap-4">
                        <button class="interview-btn font-semibold text-green-500 border border-green-500 rounded-md px-4 py-2">Interview</button>
                        <button class="rejected-btn font-semibold text-red-500 border border-red-500 rounded-md px-4 py-2">Rejected</button>
                    </div>
                </div>
                <div>
                    <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            `
        filterSection.appendChild(div)
    }
}