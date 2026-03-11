package org.handy.handyreact.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.handy.handyreact.dto.CareerInfoDto;

import java.util.List;

@Mapper
public interface CareerInfoMapper {
    List<CareerInfoDto> selectCareerInfoList();
}
