package org.handy.handyreact.controller;

import org.handy.handyreact.dto.CareerInfoDto;
import org.handy.handyreact.service.CmPortfolioMstService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "http://localhost:3000")
public class CmPortfolioMstController {

    @Autowired
    private CmPortfolioMstService cmPortfolioMstService;

    @GetMapping("/data")
    public Map<String,Object> getCareerInfoList() {
        System.out.println("CmPortfolioMstController.getCareerInfoList()");
        return cmPortfolioMstService.selectCmPortfolioMstList();
    }

}
