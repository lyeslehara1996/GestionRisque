package com.GatewatService.Filter;

import java.util.List;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import com.google.common.base.Predicate;

@Component
public class RouterValidator {

    public final List<String> openApiEndpoints= List.of(
            "/Auth/signin",
            "/auth/RefreshToken",
            "/login"
    );

    public Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().contains(uri));

}