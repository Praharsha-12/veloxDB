package com.velox.veloxdb.model;

public class Stats {
    private int totalKeys;
    private String memoryUsage;
    private int clients;

    public Stats(int totalKeys, String memoryUsage, int clients) {
        this.totalKeys = totalKeys;
        this.memoryUsage = memoryUsage;
        this.clients = clients;
    }

    public int getTotalKeys() {
        return totalKeys;
    }

    public String getMemoryUsage() {
        return memoryUsage;
    }

    public int getClients() {
        return clients;
    }
}