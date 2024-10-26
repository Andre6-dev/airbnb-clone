package io.devandre.airbnbclone.user.mapper;

import io.devandre.airbnbclone.user.application.dto.ReadUserDTO;
import io.devandre.airbnbclone.user.domain.Authority;
import io.devandre.airbnbclone.user.domain.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    ReadUserDTO readUserDTOToUser(User user);

    default String mapAuthoritiesToString(Authority authority) {
        return authority.getName();
    }
}
