package org.handy.handyreact.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.handy.handyreact.dto.CareerInfoDto;
import org.handy.handyreact.dto.CareerSlideDto;

import java.util.List;

@Mapper
public interface CareerInfoMapper {
    List<CareerInfoDto> selectCareerInfoList();

    List<CareerSlideDto> selectCareerSlideList();
}
