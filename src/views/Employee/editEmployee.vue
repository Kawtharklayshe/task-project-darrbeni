<template>
 <div>
    <table>
        <thead>
            <tr>
                <th>
            
                </th><th>
            
                </th><th>
            
                </th><th>
            
                </th><th>
            
                </th><th>
            
                </th><th>
            
                </th><th>

                </th>
            </tr>
        </thead>
        <tbody>
           <tr>
            <td>

            </td> 
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
            <td>

            </td>
           </tr>
        </tbody>
    </table>
 </div>
</template>
<script>
import { BContainer,BRow,BCol } from 'bootstrap-vue';
export default {
    components:BCol,BRow,BContainer,
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters('employeeItems')
    },
    methods:{

    },
    
}
</script>
<style>


</style>