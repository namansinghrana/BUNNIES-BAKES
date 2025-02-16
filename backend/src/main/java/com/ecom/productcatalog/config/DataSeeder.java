package com.ecom.productcatalog.config;

import com.ecom.productcatalog.model.*;
import com.ecom.productcatalog.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) {
        // Check if data already exists to avoid unnecessary deletions
        if (categoryRepository.count() > 0 || productRepository.count() > 0) {
            return;
        }

        // Create Categories

        Category choclate = new Category();
        choclate.setName("Choclate");

        Category cookies = new Category();
        cookies.setName("Cookies");

        Category chips = new Category();
        chips.setName("Chips");

        Category clothing = new Category();
        clothing.setName("Chips");

        Category home = new Category();
        home.setName("Home and Kitchen");

        Category electronics = new Category();
        electronics.setName("Electronics");

        categoryRepository.saveAll(Arrays.asList(choclate, cookies, chips, electronics, home, clothing));

        // Create Products

        Product bbchoclate = new Product();
        bbchoclate.setName("BB Choclate");
        bbchoclate.setDescription("Made from melted cocoa and rich almonds");
        bbchoclate.setImageUrl("https://placehold.co/600x400");
        bbchoclate.setPrice(12.55);
        bbchoclate.setCategory(choclate);



        Product bbcookies = new Product();
        bbcookies.setName("BB Cookies");
        bbcookies.setDescription("Rich in fibre all for one solution");
        bbcookies.setImageUrl("https://placehold.co/600x400");
        bbcookies.setPrice(20.59);
        bbcookies.setCategory(cookies);



        Product bbchips = new Product();
        bbchips.setName("BB Chips");
        bbchips.setDescription("Plucked from the American Farms");
        bbchips.setImageUrl("https://placehold.co/600x400");
        bbchips.setPrice(6.82);
        bbchips.setCategory(chips);


        Product phone = new Product();
        phone.setName("Smartphone");
        phone.setDescription("Latest model smartphone with amazing features");
        phone.setImageUrl("https://placehold.co/600x400");
        phone.setPrice(699.99);
        phone.setCategory(electronics);

        Product laptop = new Product();
        laptop.setName("Laptop"); // Removed incorrect reassignment
        laptop.setDescription("High Performance Laptop");
        laptop.setImageUrl("https://placehold.co/600x400");
        laptop.setPrice(999.99);
        laptop.setCategory(electronics);

        Product jacket = new Product();
        jacket.setName("Winter Jacket");
        jacket.setDescription("Warm and cozy jacket for winter");
        jacket.setImageUrl("https://placehold.co/600x400");
        jacket.setPrice(129.99);
        jacket.setCategory(clothing);

        Product blender = new Product();
        blender.setName("Blender");
        blender.setDescription("High-speed blender for smoothies and more");
        blender.setImageUrl("https://placehold.co/600x400");
        blender.setPrice(89.99);
        blender.setCategory(home);

        productRepository.saveAll(Arrays.asList(bbchoclate, bbcookies, bbchips, phone, laptop, jacket, blender));
    }
}
