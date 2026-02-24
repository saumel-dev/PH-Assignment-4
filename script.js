let currentStatus = 'all';
const totalJob = document.querySelector('.allCards');
let totalCount = document.getElementById('total');
let invterviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');
let interviewList = [];
let rejectedList = [];
const total_job = document.getElementById('total_job');

function selectedBtn(id) {
    currentStatus = id;
    const allButtons = document.querySelectorAll('.btns button');

    allButtons.forEach(button => {
        button.classList.remove('bg-[#3b82f6FF]', 'text-white');
        button.classList.add('shadow', 'text-[#64748bFF]');
    })

    const selected = document.getElementById(id);
    selected.classList.add('bg-[#3b82f6FF]', 'text-white');
    selected.classList.remove('shadow', 'text-[#64748bFF]');

    if (id === 'interview-btn') {
        totalJob.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if (id === 'all-btn') {
        totalJob.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else {
        totalJob.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }

    if (currentStatus == 'interview-btn') {
        renderInterview();
    }
    else if (currentStatus == 'rejected-btn') renderRejected();
}
function calculateCount() {
    totalCount.innerText = totalJob.children.length;
    invterviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentStatus == 'interview-btn') {
        total_job.innerText = `${interviewList.length} of ${totalCount.innerText} jobs`;
    }
    else if (currentStatus == 'rejected-btn') {
        total_job.innerText = `${rejectedList.length} of ${totalCount.innerText} jobs`;
    }
    else total_job.innerText = `${totalCount.innerText} jobs`;
}
calculateCount();

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-interview')) {
        const parent = event.target.parentNode.parentNode;
        const jobTitle = parent.querySelector('.job-title').innerText;
        const jobRole = parent.querySelector('.job-role').innerText;
        const jobInfo = parent.querySelector('.job-info').innerText;
        // const jobStatus = parent.querySelector('.job-status').innerText;
        const jobDescription = parent.querySelector('.job-description').innerText;
        parent.querySelector('.job-status').innerText = 'Interview';
        const mod = parent.querySelector('.job-status').parentNode;
        mod.classList.remove('bg-[#eef4ffFF]', 'text-red-600', 'font-bold', 'border', 'border-[#ef4444FF]', 'bg-green-100', 'bg-red-100');
        mod.classList.add('text-green-600', 'font-bold', 'border', 'border-[#10b981FF]', 'bg-green-100');
        parent.parentNode.classList.remove('border-l-5', 'border-l-red-500');
        parent.parentNode.classList.add('border-l-5', 'border-l-green-500');
        const cardInfo = {
            jobTitle,
            jobRole,
            jobInfo,
            headClasses: 'border-l-5 border-l-green-500',
            statusClasses: 'text-green-600 font-bold border border-[#10b981FF] bg-green-100',
            jobStatus: 'Interview',
            jobDescription
        }
        const listExist = interviewList.find(item => item.jobTitle == cardInfo.jobTitle)
        if (!listExist) {
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.jobTitle != cardInfo.jobTitle);
        if (currentStatus === 'interview-btn') {
            renderInterview();
        }
        else if (currentStatus === 'rejected-btn') renderRejected();
        calculateCount();

    }
    else if (event.target.classList.contains('btn-rejected')) {
        const parent = event.target.parentNode.parentNode;
        const jobTitle = parent.querySelector('.job-title').innerText;
        const jobRole = parent.querySelector('.job-role').innerText;
        const jobInfo = parent.querySelector('.job-info').innerText;
        // const jobStatus = parent.querySelector('.job-status').innerText;
        const jobDescription = parent.querySelector('.job-description').innerText;
        parent.querySelector('.job-status').innerText = 'Rejected';
        const mod = parent.querySelector('.job-status').parentNode;
        mod.classList.remove('bg-[#eef4ffFF]', 'text-green-600', 'font-bold', 'border', 'border-[#10b981FF]', 'bg-green-100', 'bg-red-100');
        mod.classList.add('text-red-600', 'font-bold', 'border', 'border-[#ef4444FF]', 'bg-red-100');
        parent.parentNode.classList.remove('border-l-5', 'border-l-green-500');
        parent.parentNode.classList.add('border-l-5', 'border-l-red-500');
        const cardInfo = {
            jobTitle,
            jobRole,
            jobInfo,
            headClasses: 'border-l-5 border-l-red-500',
            statusClasses: 'text-red-600 font-bold border border-[#ef4444FF] bg-red-100',
            jobStatus: 'Rejected',
            jobDescription
        }
        const listExist = rejectedList.find(item => item.jobTitle == cardInfo.jobTitle)
        if (!listExist) {
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle);

        if (currentStatus === 'interview-btn') {
            renderInterview();
        }
        else if (currentStatus === 'rejected-btn') renderRejected();
        calculateCount();
    }
    else if (event.target.classList.contains('btn-delete'))
    {
        event.target.closest('.card').remove();
        calculateCount();
    }
})



function renderInterview() {
    filterSection.innerHTML = '';
    emptyPage(interviewList);
    for (let interview of interviewList) {

        let div = document.createElement('div');
        div.className = `card shadow flex justify-between p-7 rounded-md ${interview.headClasses}`;
        div.innerHTML = `
        <div class="card-left-content space-y-4">
                    <div class="card-head">
                        <p class="job-title text-[1.125rem] text-[#002c5cFF] font-semibold">${interview.jobTitle}</p>
                        <p class="job-role text-[#64748bFF]">${interview.jobRole}</p>
                    </div>
                    <div class="card-mid">
                        <p class="job-info text-[#64748bFF]">${interview.jobInfo}</p>
                    </div>
                    <div class="bg-[#eef4ffFF] w-fit px-2 py-2 rounded-md ${interview.statusClasses}">
                        <p class="job-status">${interview.jobStatus}</p>
                    </div>
                    <p class="job-description text-[#323b49FF]">${interview.jobDescription}</p>
                    <div class="job-btns flex gap-2">
                        <button class="btn-interview text-green-500 border border-[#10b981FF] px-2 py-2 rounded-md font-semibold hover:bg-green-100 cursor-pointer">INTERVIEW</button>
                        <button class="btn-rejected text-red-500 border border-[#ef4444FF] px-2 py-2 rounded-md font-semibold hover:bg-red-100 cursor-pointer">REJECTED</button>
                    </div>
                </div>
                <div class="card-right-content">
                    <button" class="btn-delete-interview shadow-md p-1 rounded-full text-gray-400 hover:text-red-500"><i class="fa-regular fa-trash-can"></i></button>
                </div>`;
        filterSection.appendChild(div);
        calculateCount();
    }
}

function renderRejected() {
    filterSection.innerHTML = '';
    emptyPage(rejectedList);
    for (let reject of rejectedList) {

        let div = document.createElement('div');
        div.className = `card shadow flex justify-between p-7 rounded-md ${reject.headClasses}`;
        div.innerHTML = `
        <div class="card-left-content space-y-4">
                    <div class="card-head">
                        <p class="job-title text-[1.125rem] text-[#002c5cFF] font-semibold">${reject.jobTitle}</p>
                        <p class="job-role text-[#64748bFF]">${reject.jobRole}</p>
                    </div>
                    <div class="card-mid">
                        <p class="job-info text-[#64748bFF]">${reject.jobInfo}</p>
                    </div>
                    <div class="bg-[#eef4ffFF] w-fit px-2 py-2 rounded-md ${reject.statusClasses}">
                        <p class="job-status">${reject.jobStatus}</p>
                    </div>
                    <p class="job-description text-[#323b49FF]">${reject.jobDescription}</p>
                    <div class="job-btns flex gap-2">
                        <button class="btn-interview text-green-500 border border-[#10b981FF] px-2 py-2 rounded-md font-semibold hover:bg-green-100 cursor-pointer">INTERVIEW</button>
                        <button class="btn-rejected text-red-500 border border-[#ef4444FF] px-2 py-2 rounded-md font-semibold hover:bg-red-100 cursor-pointer">REJECTED</button>
                    </div>
                </div>
                <div class="card-right-content">
                    <button " class="btn-delete-rejected shadow-md p-1 rounded-full text-gray-400 hover:text-red-500"><i class="fa-regular fa-trash-can"></i></button>
                </div>`;
        filterSection.appendChild(div);
        calculateCount();
    }
}
function emptyPage(array) {
    if (array.length == 0) {
        filterSection.innerHTML = `
        <div class="flex flex-col items-center justify-center p-20 border-3 border-dashed border-gray-200 rounded-lg">
        <i class="fa-regular fa-file-lines text-6xl text-blue-400 mb-4"></i>
        <h3 class="text-xl font-bold text-gray-700">No jobs available</h3>
        <p class="text-gray-500">Check back soon for new job opportunities</p>
    </div>`;
    }
}
function deleteBtn(id) {
    if (id == 'btn-delete-interview') {
        console.log(id);
        interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle);
    }
    else if (id == 'btn-delete-rejected') {
        rejectedList = rejectedList.filter(item => item.jobTitle != cardInfo.jobTitle);
    }
}