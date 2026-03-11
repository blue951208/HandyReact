package org.handy.handyreact.service.impl;

import org.handy.handyreact.dto.CareerInfoDto;
import org.handy.handyreact.mapper.CareerInfoMapper;
import org.handy.handyreact.service.CareerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerInfoServiceImpl implements CareerInfoService {

    @Autowired
    private CareerInfoMapper careerInfoMapper;

    @Override
    public List<CareerInfoDto> selectCareerInfoList() {
        return careerInfoMapper.selectCareerInfoList();
    }

}