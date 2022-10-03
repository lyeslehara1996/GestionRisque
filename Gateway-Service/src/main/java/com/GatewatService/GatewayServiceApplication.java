package com.GatewatService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import com.GatewatService.Filter.AuthentigationFilter;

@SpringBootApplication
@EnableEurekaClient
public class GatewayServiceApplication {

    @Autowired
    private AuthentigationFilter filter;

	public static void main(String[] args) {
		SpringApplication.run(GatewayServiceApplication.class, args);
	}

	
	  // cette configuration est static 
	
//	
	
//    @Bean
//    public RouteLocator routes(RouteLocatorBuilder builder) {
//        return builder.routes()
//                .route("Produit-Service", r -> r.path("/Produit/**")
//                        .filters(f -> f.filter(filter))
//                        .uri("lb://PRODUIT-SERVICE"))
//
//                .route("Authentification-Service", r -> r.path("/Auth/**")
//                        .filters(f -> f.filter(filter))
//                        .uri("lb://AUTHENTIFICTION-SERVICE"))
//                .build();
//    }
//	
//	@Bean
//	DiscoveryClientRouteDefinitionLocator definitionLocator(ReactiveDiscoveryClient rdc, DiscoveryLocatorProperties properties) {
//		return new  DiscoveryClientRouteDefinitionLocator(rdc,properties);
//	}
	}

