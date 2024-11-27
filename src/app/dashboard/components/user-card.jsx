import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function IconComponent({ Icon }) {
  return <Icon className="h-4" />;
}

const UserCard = ({ title, num, stat, Icon, m }) => {
  const color =
    stat > 0 ? "text-green-300 opacity-60" : "text-red-300 opacity-60";
  return (
    <Card className=" flex-1 min-w-[130px] shadow border-t-4 odd:border-t-primary even:border-t-accent odd:bg-background even:bg-border ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <IconComponent Icon={Icon} />
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold">
          {num} <span className="opacity-60 text-xs">{m}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          <span className={color}>{stat}% </span> from last month
        </p>
      </CardContent>
    </Card>
  );
};

export default UserCard;
