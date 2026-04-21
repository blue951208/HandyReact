package org.handy.handyreact.service.impl;

import org.handy.handyreact.dto.CareerInfoDto;
import org.handy.handyreact.dto.CareerSlideDto;
import org.handy.handyreact.mapper.CareerInfoMapper;
import org.handy.handyreact.service.CareerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CareerInfoServiceImpl implements CareerInfoService {

    @Autowired
    private CareerInfoMapper careerInfoMapper;

    @Override
    public List<CareerInfoDto> selectCareerInfoList() {
        return careerInfoMapper.selectCareerInfoList();
    }

    @Override
    public List<Map<String, Object>> selectCareerSlideList() {

        List<CareerInfoDto> selectCareerInfoList = careerInfoMapper.selectCareerInfoList();
        List<CareerSlideDto> careerSlideList = careerInfoMapper.selectCareerSlideList();

        List<Map<String, Object>> list = new ArrayList<>();

        for (CareerInfoDto careerInfo : selectCareerInfoList) {
            Map<String, Object> item = new HashMap<>(); // company, startdt, enddt 입력
            List<Map<String, Object>> serviceList = new ArrayList<>();

            int i = 0;
            
            // services 입력
            for (CareerSlideDto careerSlide : careerSlideList) {
                Map<String,Object> serviceItem = new HashMap<>();
                if (careerInfo.getVCareerId().equals(careerSlide.getVCareerId())) {
                    
                    if (i == 0) {
                        // company, startdt, enddt는 처음 한번만 입력
                        item.put("company", careerInfo.getVCareerNm());
                        item.put("startdt", careerInfo.getDStartDtm());
                        item.put("enddt", careerInfo.getDEndDtm());
                        i++;
                    }
                    
                    serviceItem.put("name", careerSlide.getVDetailNm());

                    List<Map<String,Object>> workList = new ArrayList<>();
                    String[] works = careerSlide.getVCont().split("|");
                    for (String work : works) {
                        Map<String,Object> workItem = new HashMap<>();
                        workItem.put("work", work);
                        workList.add(workItem);
                    }
                    serviceItem.put("jobs", workList);
                    serviceList.add(serviceItem);
                }

            }

            if (serviceList != null && !serviceList.isEmpty()) {
                item.put("services", serviceList);
            }

            if (item.containsKey("company") && item.containsKey("services")) {
                list.add(item);
            }
        }

        return list;
    }
}