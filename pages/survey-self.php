<div id="page2" class="row" style="display:none;">
    <div class="col-lg-10 text-center content-box">
        <div class="progress-bar" id="progress-bar-1" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <h1 id="pageTwoTitle">How You See Yourself</h1>
        <p id="pageTwoDescription">Read each statement carefully and decide how accurately it describes you. Please select the most appropriate option for each statement.</p>
        <div class="instruction-box">
            <p id="pageTwoInstructionText">Rate how well a particular statement describes you and accordingly Select </p>
            <ul>
                <li id="pageTwoInstr1"><b>option 2</b> if the statement describes you <b>very well</b></li>
                <li id="pageTwoInstr2"><b>option 1</b> if it describes <b>you somewhat well</b>, or</li>
                <li id="pageTwoInstr3"><b>option 0</b> if it does not describe you well/<b>does not apply</b> to you.</li>
            </ul>
        </div>

        <div class="survey-section-one">
            <!-- Survey Questions will be loaded here dynamically -->
        </div>
        
        <div class="btn">
            <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#exitTestModal" class="exit" id="pageTwoExit">Exit Test</a>
            <a href="javascript:;" onclick='changePage(3)' class="primary" id="pageTwoNext">Next</a>
        </div>
        <div id="pageTwoError" class="d-none alert alert-danger mt-3" role="alert">
            Please answer all the questions!
        </div>
    </div>  
</div>