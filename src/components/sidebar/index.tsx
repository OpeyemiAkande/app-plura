import React from "react";
import {off} from "process";
import {getAuthUserDetails} from "@/lib/queries";
import MenuOptions from "./menu-options";

type Props = {
  id: string;
  type: "agency" | "subaccount";
};

const Sidebar = async ({id, type}: Props) => {
  const user = await getAuthUserDetails();
  if (!user) return null;

  if (!user.Agency) return;

  const details =
    type === "agency"
      ? user?.Agency
      : user?.Agency.SubAccount.find((subaccount) => subaccount.id === id);

  const isWhiteLabeledAgency = user.Agency.whiteLabel;

  return <div>Sidebar</div>;
};

export default Sidebar;
