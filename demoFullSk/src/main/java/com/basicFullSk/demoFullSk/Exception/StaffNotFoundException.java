package com.basicFullSk.demoFullSk.Exception;

public class StaffNotFoundException extends  RuntimeException {
    public StaffNotFoundException(Long id)
    {
        super("Could Not Found The Staff With Id "+ id);

    }

}
