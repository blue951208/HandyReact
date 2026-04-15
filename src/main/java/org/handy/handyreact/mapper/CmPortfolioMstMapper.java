package org.handy.handyreact.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.handy.handyreact.dto.CmPortfolioMstDto;

import java.util.List;

@Mapper
public interface CmPortfolioMstMapper {
    List<CmPortfolioMstDto> selectCmPortfolioMstList();
}