package com.velox.veloxdb.model;

public class KeyValueDTO {
    private String key;
    private String value;

    public KeyValueDTO(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }
}