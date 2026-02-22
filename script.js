function selectedBtn(id) {
    const allButtons = document.querySelectorAll('.btns button');

    allButtons.forEach(button => {
        button.classList.remove('bg-[#3b82f6FF]', 'text-white');
        button.classList.add('shadow', 'text-[#64748bFF]');
    })

    const selected = document.getElementById(id);
    selected.classList.add('bg-[#3b82f6FF]', 'text-white');
    selected.classList.remove('shadow', 'text-[#64748bFF]');
}

const totalJob = document.querySelector('.allCards');
let totalCount = document.getElementById('total');
let invterviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');
let interviewList = [];
let rejectedList = [];
function calculateCount() {
    totalCount.innerText = totalJob.children.length;
    invterviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-interview')) {
        const parent = event.target.parentNode.parentNode;
        const jobTitle = parent.querySelector('.job-title').innerText;
        const jobRole = parent.querySelector('.job-role').innerText;
        const jobInfo = parent.querySelector('.job-info').innerText;
        const jobStatus = parent.querySelector('.job-status').innerText;
        const jobDescription = parent.querySelector('.job-description').innerText;

        console.log(jobTitle, jobRole, jobInfo, jobStatus, jobDescription);
        const cardInfo = {
            jobTitle,
            jobRole,
            jobInfo,
            jobStatus,
            jobDescription
        }
        const listExist = interviewList.find(item => item.jobTitle == cardInfo.jobTitle)
        if (!listExist) {
            interviewList.push(cardInfo);
        }
        renderInterview();
    }
})

function renderInterview() {
    filterSection.innerHTML = '';
    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card shadow flex justify-between p-7 rounded-md';
        div.innerHTML = `
        <div class="card-left-content space-y-4">
                    <div class="card-head">
                        <p class="job-title text-[1.125rem] text-[#002c5cFF] font-semibold">Mobile First Corp</p>
                        <p class="job-role text-[#64748bFF]">React Native Developer</p>
                    </div>
                    <div class="card-mid">
                        <p class="job-info text-[#64748bFF]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="bg-[#eef4ffFF] w-fit px-2 py-2 rounded-md">
                        <p class="job-status">NOT APPLIED</p>
                    </div>
                    <p class="job-description text-[#323b49FF]">Build cross-platform mobile applications using React Native. Work on
                        products used by millions of users worldwide.</p>
                    <div class="job-btns flex gap-2">
                        <button class="btn-interview text-green-500 border border-[#10b981FF] px-2 py-2 rounded-md font-semibold hover:bg-green-100 cursor-pointer">INTERVIEW</button>
                        <button class="btn-rejected text-red-500 border border-[#ef4444FF] px-2 py-2 rounded-md font-semibold hover:bg-red-100 cursor-pointer">REJECTED</button>
                    </div>
                </div>
                <div class="card-right-content">
                    <button class="btn-delete shadow-md p-1 rounded-full text-gray-400 hover:text-red-500"><i class="fa-regular fa-trash-can"></i></button>
                </div>`;
    }
}

