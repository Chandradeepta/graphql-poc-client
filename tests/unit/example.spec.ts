import { shallowMount } from "@vue/test-utils";
import EmployeeTable from "@/components/EmployeeTable.vue";

describe("EmployeeTable.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(EmployeeTable, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
