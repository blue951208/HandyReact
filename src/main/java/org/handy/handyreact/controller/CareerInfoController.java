package org.handy.handyreact.controller;

import org.handy.handyreact.dto.CareerInfoDto;
import org.handy.handyreact.service.CareerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/career-info")
@CrossOrigin(origins = "http://localhost:3000")
public class CareerInfoController {

    @Autowired
    private CareerInfoService careerInfoService;

    @GetMapping("/list")
    public List<CareerInfoDto> getCareerInfoList() {
        return careerInfoService.selectCareerInfoList();
    }
}
