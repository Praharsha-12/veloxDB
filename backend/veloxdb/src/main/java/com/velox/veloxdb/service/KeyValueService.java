package com.velox.veloxdb.service;

import com.velox.veloxdb.model.Stats;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class KeyValueService {

    private final Map<String, String> database = new HashMap<>();

    public String setValue(String key, String value) {
        database.put(key, value);
        return "Key stored successfully!";
    }

    public String getValue(String key) {
        return database.getOrDefault(key, "Key not found");
    }

    public String deleteValue(String key) {
        if (database.containsKey(key)) {
            database.remove(key);
            return "Key deleted successfully!";
        }
        return "Key not found";
    }

    public Map<String, String> getAllValues() {
        return database;
    }

    public int getTotalKeys() {
        return database.size();
    }

    public Stats getStats() {
        int totalKeys = database.size();

        long memory = Runtime.getRuntime().totalMemory()
                - Runtime.getRuntime().freeMemory();

        String memoryUsage = (memory / 1024 / 1024) + " MB";

        return new Stats(totalKeys, memoryUsage, 1);
    }
}