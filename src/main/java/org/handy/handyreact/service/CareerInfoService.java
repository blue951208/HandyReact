package org.handy.handyreact.service;

import org.handy.handyreact.dto.CareerInfoDto;

import java.util.List;

public interface CareerInfoService {

    List<CareerInfoDto> selectCareerInfoList();
}