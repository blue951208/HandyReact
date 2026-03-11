package org.handy.handyreact.dto;

import lombok.Data;

@Data
public class CareerInfoDto {
    private String vCareerId;
    private String vCareerNm;
    private String dStartDtm;
    private String dEndDtm;

    private int totalMonths;
}
