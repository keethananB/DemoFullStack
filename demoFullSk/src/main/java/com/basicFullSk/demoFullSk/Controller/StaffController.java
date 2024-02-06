package com.basicFullSk.demoFullSk.Controller;


import com.basicFullSk.demoFullSk.Exception.StaffNotFoundException;
import com.basicFullSk.demoFullSk.Model.Staff;
import com.basicFullSk.demoFullSk.Repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3007")
public class StaffController {


    @Autowired
    StaffRepository staffRepository;

    @PostMapping("/creteStaff")
    Staff CREAT(@RequestBody Staff newstaff)
    {
        return staffRepository.save(newstaff);
    }

@GetMapping("/GetAll")
    List<Staff>GetAllStaff(){
        return staffRepository.findAll();
}
    @GetMapping("/staff/{id}")
    Staff getUserById(@PathVariable Long id) {
        return staffRepository.findById(id)
                .orElseThrow(() -> new StaffNotFoundException(id));
    }

    @PutMapping("/staff/{id}")
    Staff Editstaff(@RequestBody Staff newStaff, @PathVariable Long id) {
        return staffRepository.findById(id)
                .map(staff -> {
                    staff.setUsername(newStaff.getUsername());
                    staff.setName(newStaff.getName());
                    staff.setEmail(newStaff.getEmail());
                    return staffRepository.save(staff);
                }).orElseThrow(() -> new StaffNotFoundException(id));
    }

    @DeleteMapping("/staff/{id}")
    String deleteStaff(@PathVariable Long id){
        if(!staffRepository.existsById(id)){
            throw new StaffNotFoundException(id);
        }
        staffRepository.deleteById(id);
        return  "Employee with id "+id+" has been deleted success.";
    }


}
