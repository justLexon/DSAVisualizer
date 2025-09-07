package com.lexon.dsavisuals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/api")
public class SortController {
    
    @PostMapping("/sort")
    public List<Map<String, Object>> sortArray(@RequestBody Map<String, List<Integer>> payload) {
        List<Integer> arrayList = payload.get("array");
        int n = arrayList.size();

        int[] arr = arrayList.stream().mapToInt(Integer::intValue).toArray();

        List<Map<String, Object>> steps = new ArrayList<>();

        int temp;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i+1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    
                    Map<String, Object> step = new HashMap<>();
                    step.put("step", steps.size() + 1);
                    step.put("array", Arrays.stream(arr).boxed().toList());
                    steps.add(step);
                }
            }
        }

        return steps;
    }
}
