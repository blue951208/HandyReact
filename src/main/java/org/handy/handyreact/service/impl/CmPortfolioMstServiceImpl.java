package org.handy.handyreact.service.impl;
import org.handy.handyreact.dto.CmPortfolioMstDto;
import org.handy.handyreact.mapper.CmPortfolioMstMapper;
import org.handy.handyreact.service.CmPortfolioMstService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.Object;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CmPortfolioMstServiceImpl implements CmPortfolioMstService {

    @Autowired
    private CmPortfolioMstMapper cmPortfolioMstMapper;

    @Override
    public Map<String, Object> selectCmPortfolioMstList() {

        Map<String, Object> res = new HashMap<>();
        List<CmPortfolioMstDto> list = cmPortfolioMstMapper.selectCmPortfolioMstList();

        for (CmPortfolioMstDto dto : list) {
            if (!res.containsKey(dto.getVType())) {
                Map<String, Object> item = new HashMap<>();
                List<Map<String, Object>> pList = new ArrayList<>();
                item.put("title", dto.getVTitle());
                item.put("content", dto.getVCont());
                if (dto.getVShowType() != null) {
                    if ("map".equals(dto.getVShowType())) {
                        res.put(dto.getVType(), item);
                    } else if ("list".equals(dto.getVShowType())) {
                        pList.add(item);
                        res.put(dto.getVType(), pList);
                    }
                }
            } else {
                Map<String, Object> item = new HashMap<>();
                item.put("title", dto.getVTitle());
                item.put("content", dto.getVCont());
                if (dto.getVShowType() != null && "list".equals(dto.getVShowType())) {
                    List<Map<String, Object>> pList = (List<Map<String, Object>>) res.get(dto.getVType());
                    pList.add(item);
                    res.put(dto.getVType(), pList);
                }
            }
        }

        return res;
    };
}
