package com.guanacobusiness.event_ticket_sales.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.guanacobusiness.event_ticket_sales.models.entities.Token;
import com.guanacobusiness.event_ticket_sales.models.entities.User;

public interface TokenRepository extends ListCrudRepository<Token, UUID>{
    
    List<Token> findByUserAndActive(User user, Boolean active);
    Token findByContent(String content);

}
