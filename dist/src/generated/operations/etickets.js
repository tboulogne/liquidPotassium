export function createEticketsOperations(client) {
    return {
        eticketslistaddressesv2: (request) => client.requestOperation("EticketsListAddressesV2", request),
        eticketslistcustomeremaillogsv2: (request) => client.requestOperation("EticketsListCustomerEmailLogsV2", request),
        eticketslistdatesv2: (request) => client.requestOperation("EticketsListDatesV2", request),
        eticketslistdatescustompropertiesv2: (request) => client.requestOperation("EticketsListDatesCustomPropertiesV2", request),
        eticketsgetreservationv2: (request) => client.requestOperation("EticketsGetReservationV2", request),
        eticketsgetreservationv2Get2EticketsReservationReservationUuid: (request) => client.requestOperation("EticketsGetReservationV2_get_2_etickets_reservation_reservation_uuid", request),
        eticketslistsurveyv2: (request) => client.requestOperation("EticketsListSurveyV2", request),
        eticketslistsurveypassanswersv2: (request) => client.requestOperation("EticketsListSurveyPassAnswersV2", request),
        patch2EticketsSurveysAnswersPasses: (request) => client.requestOperation("patch_2_etickets_surveys_answers_passes", request),
        eticketslistsurveyticketanswersv2: (request) => client.requestOperation("EticketsListSurveyTicketAnswersV2", request),
        eticketspatchsurveyticketanswersv2: (request) => client.requestOperation("EticketsPatchSurveyTicketAnswersV2", request),
        eticketseditticketv2: (request) => client.requestOperation("EticketsEditTicketV2", request),
    };
}
//# sourceMappingURL=etickets.js.map