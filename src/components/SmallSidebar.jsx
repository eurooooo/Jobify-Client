import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";

function SmallSidebar() {
  const dashboardContext = useDashboardContext();
  console.log(dashboardContext);
  return <Wrapper>SmallSidebar</Wrapper>;
}

export default SmallSidebar;
