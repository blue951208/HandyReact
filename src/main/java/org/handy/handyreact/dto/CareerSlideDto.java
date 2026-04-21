package org.handy.handyreact.dto;

import lombok.Data;

@Data
public class CareerSlideDto extends CareerInfoDto {
    private String vDetailId;
    private String vDetailNm;

    private String vDescId;
    private String vCont;
}
