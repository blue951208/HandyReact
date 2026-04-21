package org.handy.handyreact.service;

import org.handy.handyreact.dto.CareerInfoDto;

import java.util.List;
import java.util.Map;

public interface CareerInfoService {

    List<CareerInfoDto> selectCareerInfoList();

    List<Map<String, Object>> selectCareerSlideList();
}