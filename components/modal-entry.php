<div class="modal fade" id="entryTestModal" tabindex="-1" aria-labelledby="entryTestModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="entryTestModalLabel">Are you sure?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="entryTestModalDescription">
                You have already recorded your answers for this test. Do you want to re-enter the test?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="viewResultsModalButton" onclick="viewPreviousResults()">View Results</button>
                <button type="button" class="btn btn-primary" id="entryTestModalButton" onclick="reEnterTest()">Start Anyway</button>
                <button type="button" class="btn btn-exit" id="discardTestModalButton" onclick="discardTest()">Discard</button>
            </div>
        </div>
    </div>
</div>