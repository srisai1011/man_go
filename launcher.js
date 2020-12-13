class launcher{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcherx=Constraint.create(options)
		World.add(world,this.launcherx)
	}

	attach(body){
		this.launcherx.bodyA=body;
	}

	fly()
	{
		this.launcherx.bodyA=null;
	}

	display()
	{
		if(this.launcherx.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}