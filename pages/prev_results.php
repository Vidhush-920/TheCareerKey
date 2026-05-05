<div id="page5" class="row" style="display:none;">
    <div class="col-lg-10 text-center content-box">
        <h1 id="pageFiveTitle">Your Career Key</h1>

        <div class="person-info mt-5">
            <div class="person-info-col">
                <div class="person-data" id="personNameDiv">
                    <div class="person-label d-inline-block"><span id="pageFivePersonNameLabel">Name :</span></div>
                    <div class="d-inline-block"><span class="person-data-text" id="pageFivePersonName"></span></div>
                </div>
                <div class="person-data" id="personNICDiv">
                    <div class="person-label d-inline-block"><span id="pageFivePersonNICLabel">NIC :</span></div>
                    <div class="d-inline-block"><span class="person-data-text" id="pageFivePersonNIC"></span></div>
                </div>
            </div>
            <div class="person-info-col">
                <div class="person-data" id="dateRecorded">
                    <div class="person-label d-inline-block"><span id="pageFiveDateLabel">Date :</span></div>
                    <div class="d-inline-block"><span class="person-data-text" id="pageFiveDate"></span></div>
                </div>
            </div>
        </div>

        <div id="pageFiveError" class="d-none alert alert-danger no-print" role="alert">
            Not ready for the interpretation!
        </div>

        <div class="result-table-div">
            <h5 class="text-start" id="pageFiveResultsTableTitle">Career Key Results</h5>
            <p id="pageFiveResultsTableDescription" class="text-start no-print">
                According to Dr.John Holland’s Career Key Theory, individuals generally fall into six personality types given below. 
                The top three types in which you score the highest represent the dominant aspects of your career personality. These results help 
                indicate the types of work environments and occupations you are most likely to prefer and succeed in.
            </p>
            <div class="table-responsive">
                <table class="table mt-3">
                    <thead>
                        <tr>
                            <th>  </th>
                            <th class="results-table-realistic" id="resultsTableRealistic">Realistic</th>
                            <th class="results-table-investigative" id="resultsTableInvestigative">Investigative</th>
                            <th class="results-table-artistic" id="resultsTableArtistic">Artistic</th>
                            <th class="results-table-social" id="resultsTableSocial">Social</th>
                            <th class="results-table-enterprising" id="resultsTableEnterprising">Enterprising</th>
                            <th class="results-table-conventional" id="resultsTableConventional">Conventional</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="totalRow">
                            <th id="pageFiveTotalLabel">Total</th>
                            <td class="results-table-realistic"><span id="pageFiveRealistic"></span></td>
                            <td class="results-table-investigative"><span id="pageFiveInvestigative"></span></td>
                            <td class="results-table-artistic"><span id="pageFiveArtistic"></span></td>
                            <td class="results-table-social"><span id="pageFiveSocial"></span></td>
                            <td class="results-table-enterprising"><span id="pageFiveEnterprising"></span></td>
                            <td class="results-table-conventional"><span id="pageFiveConventional"></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="result-chart-div">
            <h5 class="text-start" id="pageFiveChartTitle">Career Key Chart</h5>
            <div class="result-chart-area">
                <div class="canvas-container">
                    <canvas id="pageFiveResultChart" class="chart"></canvas>
                </div>
            </div>
            <div class="result-type-area text-center mt-2">
                <h6 class="text-center" id="pageFiveChartPersonType">Your Career Key Based Personality Type: </h6>
                <div class="person-type-box" id="pageFiveChartPersonTypeValue"></div>
            </div>
            
        </div>

        <div class="notes-div">
            <h5 class="text-start" id="pageFiveNotesTitle">Career Counselling Notes</h5>
            <div class="form-group">
                <textarea class="form-control" name="person-career-notes" id="exampleFormControlTextarea1" rows="3" editable="false"></textarea>
            </div>
        </div>
        
        <div class="btn">
            <a href="javascript:;" onclick='printPreview()' class="secondary" id="pageFiveDownload">Download Results</a>
            <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#exitTestModal" class="primary" id="pageFiveNew">Start new Test</a>
        </div>
    </div>
</div>