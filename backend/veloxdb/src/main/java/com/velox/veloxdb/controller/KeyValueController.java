package com.velox.veloxdb.controller;

import com.velox.veloxdb.model.KeyValueDTO;
import com.velox.veloxdb.model.Stats;
import com.velox.veloxdb.service.KeyValueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class KeyValueController {

    private final KeyValueService service;

    public KeyValueController(KeyValueService service) {
        this.service = service;
    }

    // FIX: GET instead of POST so browser works
    @GetMapping("/set")
    public String setValue(@RequestParam String key,
                           @RequestParam String value) {
        return service.setValue(key, value);
    }

    @GetMapping("/get/{key}")
    public String getValue(@PathVariable String key) {
        return service.getValue(key);
    }

    @GetMapping("/delete/{key}")
    public String deleteValue(@PathVariable String key) {
        return service.deleteValue(key);
    }

    @GetMapping("/all")
    public List<KeyValueDTO> getAllValues() {
        return service.getAllValues()
                .entrySet()
                .stream()
                .map(e -> new KeyValueDTO(e.getKey(), e.getValue()))
                .toList();
    }

    @GetMapping("/count")
    public int getCount() {
        return service.getTotalKeys();
    }

    @GetMapping("/stats")
    public Stats getStats() {
        return service.getStats();
    }
}