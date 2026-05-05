<div id="page3" class="row" style="display:none;">
    <div class="text-center content-box">
        <div class="progress-bar" id="progress-bar-2" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <h1 id="pageThreeTitle">Appealing Occupations</h1>
        <p id="pageThreeDescription">Review the list of occupations given below and select the ones that appeal to you. For each occupation, Please choose the most appropriate response from given options.</p>
        <div class="instruction-box">
            <p id="pageThreeInstructionText">Rate how well a particular occupation is desirable or useful to you and accordingly select</p>
            <ul>
                <li id="pageThreeInstr1"><b>option 2</b> if the occupation is in <b>any way desirable or useful to you</b>,</li>
                <li id="pageThreeInstr2"><b>option 1</b> if it is <b>likely to be useful to you</b>, or</li>
                <li id="pageThreeInstr3"><b>option 0</b> if it is <b>undesirable, useless, or you are undecided.</b></li>
            </ul>
        </div>

        <div class="survey-section-two">
            <!-- Survey Questions will be loaded here dynamically -->
        </div>

        <div class="btn">
            <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#exitTestModal" class="exit" id="pageThreeExit">Exit Test</a>
            <a href="javascript:;" onclick='changePage(2)' class="primary" id="pageThreeBack">Back</a>
            <a href="javascript:;" onclick='changePage(4)' class="primary" id="pageThreeNext">See Results</a>
        </div>
        <div id="pageThreeError" class="d-none alert alert-danger mt-3" role="alert">
            Please answer all the questions!
        </div>
    </div>
</div>